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
    text: css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    `,
  };
  const media = data.media[0];
  // const multiMedia = media["media-metadata"];
  // const firstPic = multiMedia[0];
  // const firstPicUrl = firstPic.url;
  // https://via.placeholder.com/150
  return (
    <article css={styles.article}>
      <img src={media} alt="" />
      <div>
        <h1 css={styles.title}>{data.title}</h1>
        <p css={styles.text}>{data.abstract}</p>
      </div>
    </article>
  );
};

export default Articles;
