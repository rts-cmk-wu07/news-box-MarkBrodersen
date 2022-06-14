/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ArkivSections from "./ArkivSections";
const Arkiv = ({ data, colors }) => {
  const styles = {
    test: css`
      color: ${colors.primary_1};
    `,
  };
  return (
    <div>
      <div css={styles.test}>322</div>
      {data &&
        data.map((section) => <ArkivSections colors={colors} data={data} />)}
    </div>
  );
};

export default Arkiv;
