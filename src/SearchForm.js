/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "./context/themeContext";
const SearchForm = ({ searchText }) => {
  const colors = useContext(ThemeContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  const style = {
    form: css`
      width: 95%;
      margin: 25px auto;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid ${colors.secondary_2};
    `,
    input: css`
      border: none;
      width: 95%;
      padding: 10px 20px;
      background: ${colors.secondary_2};
      & input::placeholder {
        color: ${colors.text_2A};
      }
      color: ${colors.text_2A};
    `,
    btn: css`
      border: none;
      padding: 10px 20px;
      background: ${colors.secondary_2};
      color: ${colors.text_2A};
    `,
  };
  return (
    <form css={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        css={style.input}
        aria-label="searchbar"
        placeholder="Search news"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" css={style.btn}>
        <FeatherIcon icon="search" />
      </button>
    </form>
  );
};

export default SearchForm;
