/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Feathericon from "feather-icons-react";
import { useContext } from "react";
import Articles from "./Comps/Articles";
import ThemeContext from "./context/themeContext";
import apiContext from "./context/apiContext";

const ArticleSections = ({ section }) => {
  const data = useContext(apiContext);
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
    line: css`
      position: absolute;
      height: 3px;
      background-color: ${colors.primary_2};
    `,
    line_1: css`
      top: 10px;
      left: 0px;
      width: 6px; ;
    `,
    line_2: css`
      transform: rotate(-35deg);
      top: 8px;
      left: 3.5px;
      width: 10px;
      border-radius: 0 2.5px 0 1.3px;
    `,
    line_3: css`
      top: 6.3px;
      left: 11px;
      width: 6.5px;
      border-radius: 1px 2px 50% 50%;
    `,
    line_4: css`
      transform: rotate(105deg);
      top: 9.7px;
      left: 9.9px;
      width: 5.5px;
      border-radius: 0 25% 75% 0; ;
    `,
    line_5: css`
      transform: rotate(-5deg);
      top: 10.4px;
      left: 12px;
      width: 12px;
      border-radius: 0 0 0 1px; ;
    `,
    articleContainer: css`
      display: flex;
    `,
  };
  const filtedArticlas = data.filter((artical) => {
    return section === artical.section;
  });
  console.log(filtedArticlas);

  return (
    <section>
      <label htmlFor={section}>
        <div css={styles.container}>
          <div css={styles.DUPEcontainer}>
            <div css={styles.refPoint}>
              <Feathericon css={styles.square} icon="square" />
              <span css={[styles.line_1, styles.line]}></span>
              <span css={[styles.line_2, styles.line]}></span>
              <span css={[styles.line_3, styles.line]}></span>
              <span css={[styles.line_4, styles.line]}></span>
              <span css={[styles.line_5, styles.line]}></span>
            </div>
          </div>
          <h2>{section}</h2>
        </div>
        <input type="checkbox" name={section} id={section} />
      </label>
      {filtedArticlas &&
        filtedArticlas.map((art, index) => (
          <div css={styles.articleContainer} key={index}>
            <Articles data={filtedArticlas} />
          </div>
        ))}
    </section>
  );
};

export default ArticleSections;
