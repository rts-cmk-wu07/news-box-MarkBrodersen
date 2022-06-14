/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Feathericon from "feather-icons-react";

import { useContext } from "react";
import ThemeContext from "./context/themeContext";

const ArticleSections = ({ data }) => {
  const colors = useContext(ThemeContext);
  const styles = {
    container: css`
      display: flex;
    `,
    DUPEcontainer: css`
      color: ${colors.primary_2};
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    refPoint: css`
      position: relative;
    `,
    square: css`
      transform: rotate(45deg);
    `,
    line_1: css`
      position: absolute;
      top: 10px;
      left: 0px;
      width: 6px;
      height: 3px;
      background-color: ${colors.primary_2};
    `,
    line_2: css`
      position: absolute;
      transform: rotate(-35deg);
      top: 8px;
      left: 3.5px;
      width: 10px;
      height: 3px;
      background-color: ${colors.primary_2};
      border-radius: 0 2.5px 0 1.3px;
    `,
    line_3: css`
      position: absolute;
      top: 6.3px;
      left: 11px;
      width: 6.5px;
      height: 3px;
      background-color: ${colors.primary_2};
      border-radius: 1px 2px 50% 50%;
    `,
    line_4: css`
      position: absolute;
      transform: rotate(105deg);
      top: 9.7px;
      left: 10.9px;
      width: 5.5px;
      height: 3px;
      border-radius: 0 25% 75% 0;
      background-color: ${colors.primary_2};
    `,
    line_5: css`
      position: absolute;
      top: 10px;
      left: 13px;
      width: 11px;
      height: 3px;
      background-color: ${colors.primary_2};
    `,
  };

  return (
    <label htmlFor={data}>
      <div css={styles.container}>
        <div css={styles.DUPEcontainer}>
          <div css={styles.refPoint}>
            <Feathericon css={styles.square} icon="square" />
            <span css={styles.line_1}></span>
            <span css={styles.line_2}></span>
            <span css={styles.line_3}></span>
            <span css={styles.line_4}></span>
            <span css={styles.line_5}></span>
          </div>
        </div>
        <h2>{data}</h2>
      </div>
      <input type="checkbox" name={data} id={data} />
    </label>
  );
};

export default ArticleSections;
