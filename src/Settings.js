/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Settings = ({ handleThemeChange }) => {
  const styles = {
    radioButtonContainer: css`
      display: flex;
      flex-direction: column;
      width: 90%;
      border-radius: 24px;
      background: white;
    `,
    button: css`
      width: 200px;
      margin: 0 auto;
      padding: 5px;
      border-radius: 24px;
      border: transparent;
    `,
  };
  return (
    <div>
      <div css={styles.radioButtonContainer}>
        <div>
          <h3>Europe</h3>
          <input type="checkbox" />
        </div>
        <div>
          <h3>Health</h3>
          <input type="checkbox" />
        </div>
        <div>
          <h3>Sport</h3>
          <input type="checkbox" />
        </div>
        <div>
          <h3>Business</h3>
          <input type="checkbox" />
        </div>
        <div>
          <h3>Travel</h3>
          <input type="checkbox" />
        </div>
      </div>
      <button css={styles.button} onClick={handleThemeChange}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Settings;
