/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { vars } from "./vars";
import ThemeContext from "./context/themeContext";
import apiContext from "./context/apiContext";

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
    `,
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=T3fjU1hQbMF07zHsmRKxCezq0SfjOnwz"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.results);
      });
  }, []);
  return (
    <div>
      <apiContext.Provider value={data}>
        <ThemeContext.Provider value={colors}>
          {data && (
            <Navigation
              data={data}
              colors={colors}
              handleThemeChange={handleThemeChange}
            />
          )}

          {data && (
            <div css={styles.container}>
              <Outlet />
            </div>
          )}
        </ThemeContext.Provider>
      </apiContext.Provider>
    </div>
  );
}

export default App;
