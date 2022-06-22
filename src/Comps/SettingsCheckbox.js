/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
const SettingsCheckbox = ({
  section,
  colors,
  state,
  sectionsActive,
  setSectionsActive,
}) => {
  const [isActive, setIsActive] = useState(state);
  const styles = {
    item: css`
      width: 100%;
      padding: 0.5rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    button: css`
      background: transparent;
      border: none;
      padding: 1rem 1.5rem 1rem 1.5rem;
      margin-right: -1.5rem;
      border-radius: 10rem;
    `,
    buttonDiv: css`
      display: flex;
      height: 2rem;
      width: 3.5rem;
      border-radius: 100px;
      background: ${isActive ? colors.primary_1 : colors.secondary_2};
      border: none;
      position: relative;
      align-items: center;
      transition: 0.3s;
    `,
    toggle: css`
      position: absolute;
      height: 1.7rem;
      width: 1.7rem;
      background: ${colors.text_3};
      transition: 0.2s;
      border-radius: 100px;
      left: ${isActive ? "calc(100% - 1.85rem)" : "0.15rem"};
      box-shadow: 0 0.25rem 0.5rem ${colors.text_dark}20;
    `,
  };
  const clickHandler = () => {
    setIsActive(!isActive);
    if (isActive) {
      console.log(sectionsActive.indexOf(section));
      console.log(sectionsActive);
      setSectionsActive(sectionsActive.filter((title) => title !== section));
    } else {
      const newSections = [...sectionsActive, section].sort();
      setSectionsActive(newSections);
    }
  };
  return (
    <li css={styles.item}>
      <h2>{section}</h2>
      <button css={styles.button} onClick={clickHandler}>
        <div css={styles.buttonDiv}>
          <div css={styles.toggle}></div>
        </div>
      </button>
    </li>
  );
};

export default SettingsCheckbox;
