/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Articles = ({ section }) => {
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
        <h1>{section}</h1>
        <p>{section}</p>
      </div>
    </article>
  );
};

export default Articles;
