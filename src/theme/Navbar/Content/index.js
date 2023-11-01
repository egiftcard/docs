import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import DocBreadcrumbs from "../../DocBreadcrumbs";
import styles from "./styles.module.css";
import { ContextBot } from "../../../components/ContextBotButton/ContextBotButton";
import ThirdwebMiniLogo from "@site/static/assets/thirdweb/mini-logo.svg";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <div className={styles.desktopOnly}>
            <NavbarLogo />
          </div>

          <ThirdwebMiniLogo
            width={40}
            height={40}
            className={styles.mobileOnly}
          />

          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          {/* Left we have the breadcrumbs */}
          <DocBreadcrumbs />

          {/* Right we have toggle, search, go to app button */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <NavbarItems items={rightItems} />
            <NavbarColorModeToggle className={styles.colorModeToggle} />

            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}

            <ContextBot />

            <a
              className={styles.normalLinks}
              href="https://support.thirdweb.com/?utm_source=portal"
            >
              Support
            </a>
            <a
              className={styles.normalLinks}
              href="https://feedback.thirdweb.com/?utm_source=portal"
            >
              Feedback
            </a>
            <a
              className={styles.goToAppButton}
              href="https://thirdweb.com/dashboard?utm_source=portal"
            >
              Dashboard
            </a>
          </div>
        </>
      }
    />
  );
}
