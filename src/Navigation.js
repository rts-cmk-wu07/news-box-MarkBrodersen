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
      z-index: 300000;
    `,
    navContainer: css`
      display: flex;
      justify-content: space-between;
      & li {
        list-style: none;
      }
    `,
  };

  return (
    <div>
      <ul css={styles.navContainer}>
        <li>
          <Link to="home" css={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="arkiv" css={styles.links}>
            <FeatherIcon icon="archive" />
          </Link>
        </li>
        <li>
          <FeatherIcon icon={"settings"} />
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
