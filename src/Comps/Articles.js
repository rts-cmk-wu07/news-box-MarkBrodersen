/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Feathericon from "feather-icons-react";

const Articles = ({ data, colors }) => {
  const styles = {
    article: css`
      width: 400px;
      margin: 15px 0;
      color: ${colors.text_1};
    `,
    img: css`
      display: inline-block;
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 100px;
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
  const findImage = (router) => {
    if (router !== undefined) {
      return (
        <img
          css={styles.img}
          src={router["media-metadata"][0].url}
          alt={router.copyright}
        />
      );
    } else {
      return <Feathericon icon="info" css={styles.img} />;
    }
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
