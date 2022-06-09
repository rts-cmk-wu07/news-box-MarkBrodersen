/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";

import { Link } from "react-router-dom";

const Navigation = ({ colors }) => {
  const styles = {
    links: css`
      color: ${colors.primary_1};
      text-decoration: none;
    `,
    settingsIcon: css`
      border: none;
    `,
  };
  const handleSettingsChange = () => {};
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
          <button css={styles.settingsIcon} onClick={handleSettingsChange}>
            <FeatherIcon icon={"settings"} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
