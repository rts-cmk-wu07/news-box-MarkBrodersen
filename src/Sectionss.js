/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useContext } from "react";
import Articles from "./Comps/Articles";
import ThemeContext from "./context/themeContext";
import { useLocation } from "react-router-dom";
import Popup from "./Comps/Popup";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const Sectionss = ({ title, data, section, archiveData }) => {
  const colors = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [popUp, setPopUp] = useState("");
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const location = useLocation();

  const filtedArtical = (articles) => {
    return articles.filter((article) => article.section === title);
  };

  const [numberOfArticles, setNumberOfArticles] = useState(
    filtedArtical(data).length
  );

  const swipeHandler = (article) => {
    const ls = localStorage.getItem("archive");
    const archive = JSON.parse(ls);

    if (location.pathname === "/archive") {
      const newArchive = archive.filter(
        (item) =>
          item.title !== article.title && item.section !== article.section
      );
      localStorage.setItem("archive", JSON.stringify(newArchive));
      setNumberOfArticles(numberOfArticles - 1);
    } else {
      let isDuplicate;
      if (archive) {
        isDuplicate = archive.some(
          (item) =>
            item.title === article.title && item.section === article.section
        );
      } else {
        isDuplicate = false;
      }

      if (!isDuplicate) {
        const newArchive = {
          title: article.title,
          media: article.media,
          abstract: article.abstract,
          section: article.section,
          url: article.url,
        };

        console.log(newArchive);
        let updatedArchive = [];
        if (archive) {
          updatedArchive = [...archive, newArchive];
        } else {
          updatedArchive = [newArchive];
        }
        localStorage.setItem("archive", JSON.stringify(updatedArchive));
        setPopUpIsOpen(true);
        setPopUp("The article is saved. You can find it in the archive.");
        setTimeout(() => {
          setPopUpIsOpen(false);
        }, 5000);
      } else {
        console.log("duplicate");
        setPopUpIsOpen(true);
        setPopUp(`You have already saved this article`);
        setTimeout(() => {
          setPopUpIsOpen(false);
        }, 5000);
      }
    }
  };
  const articleHeight = 6;
  const styles = {
    title: css`
      color: ${colors.text_1};
    `,
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
    list: css`
      height: 0;
      overflow-y: hidden;
      transition: calc(0.05s * ${numberOfArticles} + 0.25s);

      ${isOpen &&
      `
      height: calc(${
        numberOfArticles * articleHeight
      }rem + (${numberOfArticles} * 1px));
    `}
    `,
    refPoint: css`
      position: relative;
    `,
    square: css`
      margin: 0 0 -4px 0;
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
    checkbox: css`
      display: none;
    `,
    articleContainer: css`
      display: flex;
    `,
    action: css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${colors.primary_1};
      color: ${colors.text_light};
      width: 7rem;
    `,
    sectionContainer: css`
      margin-bottom: 3rem;
    `,
  };
  return (
    <section css={styles.sectionContainer}>
      <label htmlFor={section}>
        <div css={styles.container}>
          <div css={styles.DUPEcontainer}>
            <div css={styles.refPoint}>
              <FeatherIcon css={styles.square} icon="square" />
              <span css={[styles.line_1, styles.line]}></span>
              <span css={[styles.line_2, styles.line]}></span>
              <span css={[styles.line_3, styles.line]}></span>
              <span css={[styles.line_4, styles.line]}></span>
              <span css={[styles.line_5, styles.line]}></span>
            </div>
          </div>
          <h2 css={styles.title}>{title}</h2>
        </div>
        <input
          onClick={() => setIsOpen(!isOpen)}
          css={styles.checkbox}
          type="checkbox"
          name={section}
          id={section}
        />
      </label>

      <SwipeableList
        css={styles.list}
        fullSwipe={true}
        type={ListType.IOS}
        swipeStartThreshold={0.1}
        threshold={0.4}
      >
        {data &&
          filtedArtical(data).map((data, index) => (
            <SwipeableListItem
              key={index}
              trailingActions={
                <TrailingActions>
                  <SwipeAction
                    onClick={() => swipeHandler(data)}
                    destructive={location.pathname === "/archive"}
                  >
                    <div css={styles.action}>
                      <FeatherIcon icon="inbox" />
                    </div>
                  </SwipeAction>
                </TrailingActions>
              }
            >
              <div key={index}>
                <Articles data={data} colors={colors} />
              </div>
            </SwipeableListItem>
          ))}
      </SwipeableList>
      <Popup popUp={popUp} popUpIsOpen={popUpIsOpen} />
    </section>
  );
};

export default Sectionss;
