/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";

import { Link } from "react-router-dom";

import Settings from "./Settings";
const Navigation = ({ data, colors, handleThemeChange }) => {
  const styles = {
    links: css`
      color: ${colors.primary_1};
      text-decoration: none;
    `,
    settingsIcon: css`
      border: none;
    `,
  };
  const handleSettingsPopup = () => {
    const element = document.querySelector(".settingsContainerRef");
    const classes = element.classList;
    element.classList.toggle("settingsContainerr");
    element.classList.toggle("settingsContainer--disable");
    if (classes.contains("settingsContainer--disable")) {
      setTimeout(() => {
        element.style.display = "none";
      }, 502);
    }
    if (classes.contains("settingsContainerr")) {
      element.style.display = "block";
    }
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="home" css={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="arkiv" css={styles.links}>
            Arkiv
          </Link>
        </li>
        <li>
          <button css={styles.settingsIcon} onClick={handleSettingsPopup}>
            <FeatherIcon icon={"settings"} />
          </button>
        </li>
      </ul>
      <Settings
        data={data}
        colors={colors}
        handleThemeChange={handleThemeChange}
      />
    </div>
  );
};

export default Navigation;
