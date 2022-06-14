/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import apiContext from "../context/apiContext";

const Articles = () => {
  const data = useContext(apiContext);
  const colors = useContext(ThemeContext);

  const styles = {
    article: css`
      width: 400px;
      margin: 15px 0;
    `,
  };
  return (
    <article css={styles.article}>
      <img src="" alt="" />
      <div>
        <h1>{data.title}</h1>
        <p></p>
      </div>
    </article>
  );
};

export default Articles;
