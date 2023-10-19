git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
yarn
# go into js package and build
cd ./submodules/js
pnpm install
pnpm build
# SDK
cd ./packages/sdk
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
# React
cd ../react
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
# React Core
cd ../react-core
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
# Storage
cd ../storage
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
# add pnpm typedoc to all packages
# remove index.html (we don't want to show readme) 
# rename modules.html -> index.html
# add new command to move all typedoc-generated folders and files into "build/<package>/reference"
# point <package> references to the new `build/<package>/reference/`
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier