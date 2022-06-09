/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import Settings from "./Settings";
import { vars } from "./vars";
import ThemeContext from "./context/context";

function App() {
  const { light, dark } = vars;
  const [theme, setTheme] = useState(dark);
  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  const colors = theme;
  const styles = {
    container: css`
      background: ${colors.secondary_2};
      height: 90vh;
    `,
  };
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Navigation colors={colors} />
        <Settings handleThemeChange={handleThemeChange} />
        <div css={styles.container}>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
