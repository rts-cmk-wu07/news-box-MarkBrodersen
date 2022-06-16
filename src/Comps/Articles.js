/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Articles = ({ data, colors }) => {
  const styles = {
    article: css`
      width: 400px;
      margin: 15px 0;
      color: ${colors.text_1};
    `,
    title: css`
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
    img: css`
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 100px;
    `,
    text: css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    `,
  };
  console.log(data);
  const findImage = (router) => {
    if (router !== undefined) {
      return (
        <img
          css={styles.img}
          src={router["media-metadata"][0].url}
          alt={router.copyright}
        />
      );
    }
    return <div css={styles.imgDiv}></div>;
  };
  return (
    <article css={styles.article}>
      {findImage(data.media[0])}
      <div>
        <h1 css={styles.title}>{data.title}</h1>
        <p css={styles.text}>{data.abstract}</p>
      </div>
    </article>
  );
};

export default Articles;
