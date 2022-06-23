/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";

import { fallDown as Menu } from "react-burger-menu";

import SettingsCheckbox from "./Comps/SettingsCheckbox";
import SectionContext from "./context/sectionContext";
import apiContext from "./context/apiContext";

const NavBar = ({ colors, handleThemeChange }) => {
  const { sections, setSectionsActive } = useContext(SectionContext);
  const { sectionList, sectionsActive } = sections;
  const data = useContext(apiContext);
  const styles = {
    settingsContainer: css`
      background: ${colors.secondary_1};
    `,
    settingsIcon: css`
      border: none;
    `,
  };
  const sorted = data.sort((a, b) => {
    if (a.section < b.section) {
      return -1;
    }
    if (a.section > b.section) {
      return 1;
    }
    return 0;
  });
  const titles = [...new Set(sorted.map((item) => item.section))];
  const filteredTitles = sections.sectionsActive.filter((title) => {
    return titles.includes(title);
  });
  return (
    <div>
      <Menu
        outerContainerId="wrappes"
        width="100%"
        css={styles.settingsContainer}
      >
        <div id="wrappes" css={styles.settings}>
          {sectionList &&
            filteredTitles.map((section) => (
              <SettingsCheckbox
                colors={colors}
                key={section}
                section={section}
                state={sectionsActive.includes(section)}
                sectionsActive={sectionsActive}
                setSectionsActive={setSectionsActive}
              />
            ))}
          <button css={styles.button} onClick={handleThemeChange}>
            Toggle Dark Mode
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
