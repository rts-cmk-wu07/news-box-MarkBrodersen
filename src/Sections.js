import { useContext } from "react";
import Sectionss from "./Sectionss";
import SectionContext from "./context/sectionContext";

const Sections = ({ data }) => {
  const sections = useContext(SectionContext);
  const sectionSeption = sections.sections;
  const sorted = data.sort((a, b) => {
    if (a.section < b.section) {
      return -1;
    }
    if (a.section > b.section) {
      return 1;
    }
    return 0;
  });

  const titles = [...new Set(sorted.map((item) => item.section))];
  const filteredTitles = sectionSeption.SectionsActive.filter((title) => {
    return titles.includes(title);
  });

  return (
    <div>
      {filteredTitles.map((title) => (
        <Sectionss key={title} title={title} data={data} />
      ))}
    </div>
  );
};

export default Sections;
