import { join, parse } from "path";
import { createInterface } from "readline";
import pkg from "fs-extra";

const { readdir, createReadStream, writeFile } = pkg;

async function makeDocs({ outDir, inDir }) {
  pkg.ensureDirSync(outDir);

  async function generate() {
    const isSolana = inDir.includes("solana");

    const docFiles = await readdir(inDir);
    for (const docFile of docFiles) {
      try {
        const { name: id, ext } = parse(docFile);
        if (ext !== ".md") {
          continue;
        }

        const docPath = join(inDir, docFile);
        const docPathOut = join(outDir, docFile).replace("react-core", "react");
        const input = createReadStream(docPath);
        const output = [];
        const lines = createInterface({
          input,
          crlfDelay: Infinity,
        });

        let title = "";

        lines.on("line", (line) => {
          if (!title) {
            const titleLine = line.match(/## (.*)/);
            if (titleLine) {
              title = titleLine[1];
              title = title.replace("() function", "");
            }
          }
          const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
          if (homeLink) {
            //skip the breadcrumb line altogether
            return;
          }
          // See issue #4. api-documenter expects \| to escape table
          // column delimiters, but docusaurus uses a markdown processor
          // that doesn't support this. Replace with an escape sequence
          // that renders |.
          if (line.startsWith("|")) {
            line = line.replace(/\\\|/g, "&#124;");
          }
          if (line.includes("<b>")) {
            line = line.replace(/<b>/g, "**");
          }
          if (line.includes("##")) {
            line = line.replace(/\\#\\#/g, "**");
          }
          if (line.includes("</b>")) {
            line = line.replace(/<\/b>/g, "**");
          }
          if (line.includes("<!-- -->")) {
            line = line.replace(/<!-- -->/g, "");
          }
          if (line.includes("react-core")) {
            line = line.replaceAll(/react-core/g, "react");
          }

          // If the line includes a markdown link to a /react/ path, replace it with a /react/reference/ path
          if (line.includes("](/react/")) {
            line = line.replaceAll("](/react/", "](/react/reference/");
          }

          output.push(line);
        });

        await new Promise((resolve) => lines.once("close", resolve));
        input.close();

        const header = [
          "---",
          `slug: /${
            isSolana
              ? // If ID is index, then the slug should be /reference
                `solana/reference/${
                  id === "index" ? "" : id.replace("react-core", "react")
                }`
              : // If ID is index, then the slug should be /reference
                `reference/${
                  id === "index" ? "" : id.replace("react-core", "react")
                }`
          }`,
          `title: ${title}`,
          `hide_title: true`,
          `displayed_sidebar: react`,
          "---",
        ];

        // The default generation contains a line that says the below text:
        // > This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
        // Replace this text with "This feature is currently in beta and may change based on feedback that we receive."
        const betaText =
          "> This feature is currently in beta and may change based on feedback that we receive.";
        const betaLine = output.find((line) =>
          line.includes(
            "> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.",
          ),
        );
        if (betaLine) {
          output.splice(output.indexOf(betaLine), 1, `${betaText}`);
        }

        const titleLineIndex = output.findIndex((line) =>
          line.startsWith("##"),
        );
        output[titleLineIndex] = output[titleLineIndex]
          .replace("() function", "")
          .replace("##", "#");

        // The signature line is the first line that starts with "**Signature:**"
        const signatureLine = output.findIndex((line) =>
          line.startsWith("**Signature:**"),
        );

        // Example line is the first line that starts with "**Example:**"
        const exampleLine = output.findIndex((line) =>
          line.startsWith("## Example"),
        );

        // Edit the array so that every string that comes after example line (inclusive) is
        // moved to be before the signature line.
        if (exampleLine > -1) {
          const exampleLines = output.splice(exampleLine);
          output.splice(signatureLine, 0, ...exampleLines);
        }

        await writeFile(docPathOut, header.concat(output).join("\n"));
      } catch (err) {
        console.error(`Could not process ${docFile}: ${err}`);
      }
    }
  }

  await generate();
}

const packageRoot = "./submodules/js/packages/react";
const corePackageRoot = "./submodules/js/packages/react-core";

async function main() {
  pkg.rmdirSync("./docs/react/reference", { recursive: true, force: true });

  await makeDocs({
    outDir: "./docs/react/reference",
    inDir: corePackageRoot + "/docs/evm",
  });

  await makeDocs({
    outDir: "./docs/react/reference",
    inDir: packageRoot + "/docs/evm",
  });

  // pkg.ensureDirSync("./docs/react/solana/reference");

  // await makeDocs({
  //   outDir: "./docs/react/solana",
  //   inDir: corePackageRoot + "/docs/solana",
  // });

  // await makeDocs({
  //   outDir: "./docs/react/solana/reference",
  //   inDir: packageRoot + "/docs/solana",
  // });
}

// TEMP: Don't generate the full reference right now...
// main();
