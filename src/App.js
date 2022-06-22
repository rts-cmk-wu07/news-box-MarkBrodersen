/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { vars } from "./vars";
import ThemeContext from "./context/themeContext";
import apiContext from "./context/apiContext";
import SectionContext from "./context/sectionContext";

function App() {
  const { light, dark } = vars;
  const [theme, setTheme] = useState(light);
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
      background: ${colors.secondary_1};
    `,
  };
  const sections = [
    "World",
    "U.S.",
    "New York",
    "Politics",
    "Business",
    "Opinion",
    "Technology",
    "Science",
    "Health",
    "Style",
    "Travel",
    "Sports",
    "Arts",
    "Books",
    "Food",
    "Magazine",
    "T Magazine",
    "Real Estate",
    "Video",
    "Gameplay",
    "Theater",
    "Well",
  ];

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

  const sectionList = sections.sort();

  const [SectionsActive, setSectionsActive] = useState(sectionList);
  return (
    <div>
      <apiContext.Provider value={data}>
        <ThemeContext.Provider value={colors}>
          <SectionContext.Provider
            value={{
              sections: { sectionList, SectionsActive },
              setSectionsActive,
            }}
          >
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
          </SectionContext.Provider>
        </ThemeContext.Provider>
      </apiContext.Provider>
    </div>
  );
}

export default App;
