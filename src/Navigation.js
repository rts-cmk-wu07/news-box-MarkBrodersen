/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";
import { Link, useParams } from "react-router-dom";

import Settings from "./Settings";
const Navigation = ({ data, colors }) => {
  const styles = {
    links: css`
      color: ${colors.primary_1};
      text-decoration: none;
      z-index: 300000;
    `,
    settingsIcon: css`
      border: none;
    `,
    navContainer: css`
      display: flex;
      justify-content: space-between;
      & li {
        list-style: none;
      }
    `,
  };

  const params = useParams();
  console.log(params);
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
            Arkiv
          </Link>
        </li>
        <li>
          <FeatherIcon css={styles.settingsIcon} icon={"settings"} />
        </li>
      </ul>
      <Settings data={data} colors={colors} />
    </div>
  );
};

export default Navigation;
