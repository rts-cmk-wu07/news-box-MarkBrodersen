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
    ul: css`
      width: 90%;
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
  const filterTitles = sections.sectionList.filter((title) => {
    return titles.includes(title);
  });
  const state = sectionsActive.includes(filteredTitles);
  console.log(state);
  console.log(sectionsActive);
  console.log(filterTitles);
  console.log(filteredTitles);
  return (
    <div>
      <Menu
        outerContainerId="wrappes"
        width="100%"
        css={styles.settingsContainer}
      >
        <div id="wrappes" css={styles.settings}>
          <ul css={styles.ul}>
            {sectionList &&
              filterTitles.map((section) => (
                <SettingsCheckbox
                  colors={colors}
                  key={section}
                  section={section}
                  state={state}
                  sectionsActive={sectionsActive}
                  setSectionsActive={setSectionsActive}
                />
              ))}
          </ul>
          <button css={styles.button} onClick={handleThemeChange}>
            Toggle Dark Mode
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
