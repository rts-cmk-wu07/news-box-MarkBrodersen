/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Articles = ({ data }) => {
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
        <p>{data.abstract}</p>
      </div>
    </article>
  );
};

export default Articles;
