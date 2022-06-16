/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import apiContext from "../context/apiContext";

import ArkivSections from "../ArkivSections";
const Arkiv = () => {
  const data = useContext(apiContext);
  const colors = useContext(ThemeContext);

  const styles = {
    test: css`
      color: ${colors.text_1};
    `,
  };
  const sections = [...new Set(data.map((item) => item.section))];

  const filtedArtical = data.filter((artical) => {
    return sections === artical.section;
  });
  return (
    <div>
      <div css={styles.test}>322</div>
      {filtedArtical &&
        filtedArtical.map((section) => (
          <ArkivSections key={section} colors={colors} data={data} />
        ))}
    </div>
  );
};

export default Arkiv;
