/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SettingsCheckbox = ({ title, colors }) => {
  const styles = {
    buttonContainer: css`
      width: 80%;
      height: 2rem;
      padding: 25px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${colors.primary_3};
    `,
    buttonDesign: css`
      background: linear-gradient(
        to right bottom,
        ${colors.primary_3},
        ${colors.primary_1}
      );
    `,
    buttonInput: css`
      &:checked {
        & + .rad-design::before {
        }
      }
    `,
  };
  return (
    <div css={styles.buttonContainer}>
      <h3>{title}</h3>
      <label className="rad-label">
        <input
          type="checkbox"
          css={styles.buttonInput}
          className="rad-input"
          name="rad"
        />
        <div css={styles.buttonDesign} className="rad-design">
          <div className="rad-button"></div>
        </div>
      </label>
    </div>
  );
};

export default SettingsCheckbox;
