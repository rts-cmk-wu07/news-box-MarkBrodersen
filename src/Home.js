import apiContext from "./context/apiContext";
import { useContext } from "react";
import ArticleSections from "./ArticleSections";
const Home = () => {
  const data = useContext(apiContext);
  const sections = [...new Set(data.map((item) => item.section))];
  return (
    <div>
      {sections &&
        sections.map((DropDown) => (
          <ArticleSections key={DropDown} data={DropDown} />
        ))}
    </div>
  );
};

export default Home;
