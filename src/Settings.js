/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SettingsCheckbox from "./Comps/SettingsCheckbox";

const Settings = ({ data, colors, handleThemeChange }) => {
  const styles = {
    settingsContainer: css`
      opacity: 0;
      position: sticky;
      height: 0;

      background: black;
    `,
    toggleButtonContainer: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      border-radius: 24px;
      background: white;
    `,
    button: css`
      width: 200px;
      margin: 0 auto;
      padding: 5px;
      border-radius: 24px;
      border: transparent;
    `,
  };
  const sections = [...new Set(data.map((item) => item.section))];
  return (
    <div className="settingsContainer--disable settingsContainerRef">
      <div css={styles.toggleButtonContainer}>
        {sections &&
          sections.map((section) => (
            <SettingsCheckbox colors={colors} key={section} title={section} />
          ))}
      </div>
      <button css={styles.button} onClick={handleThemeChange}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Settings;
