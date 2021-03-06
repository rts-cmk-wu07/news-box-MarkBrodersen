/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";
import { Link, useLocation } from "react-router-dom";
import Heading from "./Comps/Heading";

import Settings from "./Settings";
const Navigation = ({ data, colors, handleThemeChange }) => {
  const location = useLocation();
  const styles = {
    links: css`
      color: ${colors.primary_1};
      text-decoration: none;
      z-index: 300000;
    `,
    navContainer: css`
      display: flex;
      align-content: center;
      justify-content: space-around;
      padding: 25px 0;
      border-bottom: 1px solid ${colors.secondary_2};
      & li {
        list-style: none;
      }
    `,
    test: css`
      color: red;
    `,
  };

  return (
    <div>
      <ul css={styles.navContainer}>
        <li>
          {location.pathname === "/home" ? (
            <Link to="archive" css={styles.links}>
              <FeatherIcon icon="inbox" />
            </Link>
          ) : (
            <Link to="home" css={styles.links}>
              <FeatherIcon icon="chevron-left" />
            </Link>
          )}
        </li>
        <li>
          <Heading title={location.pathname === "/home" ? "Home" : "Archive"} />
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
