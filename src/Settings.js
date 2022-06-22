/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";

import { fallDown as Menu } from "react-burger-menu";

import SettingsCheckbox from "./Comps/SettingsCheckbox";
import SectionContext from "./context/sectionContext";
const NavBar = ({ data, colors, handleThemeChange }) => {
  const { sections, setSectionsActive } = useContext(SectionContext);
  const { sectionList, sectionsActive } = sections;
  const styles = {
    settingsContainer: css`
      background: ${colors.secondary_1};
    `,
    settingsIcon: css`
      border: none;
    `,
  };

  return (
    <div>
      <Menu
        outerContainerId="wrappes"
        width="100%"
        css={styles.settingsContainer}
      >
        <div id="wrappes" css={styles.settings}>
          {sectionList &&
            sectionList.map((section, index) => (
              <SettingsCheckbox
                colors={colors}
                key={index}
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
