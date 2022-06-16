/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { fallDown as Menu } from "react-burger-menu";

import SettingsCheckbox from "./Comps/SettingsCheckbox";
const NavBar = ({ data, colors, handleThemeChange }) => {
  const styles = {
    settingsContainer: css`
      background: ${colors.secondary_1};
    `,
    settingsIcon: css`
      border: none;
    `,
  };
  const sections = [...new Set(data.map((item) => item.section))];
  return (
    <div>
      <Menu
        outerContainerId="wrappes"
        width="100%"
        css={styles.settingsContainer}
      >
        <div id="wrappes" css={styles.settings}>
          {sections &&
            sections.map((section) => (
              <SettingsCheckbox colors={colors} key={section} title={section} />
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
