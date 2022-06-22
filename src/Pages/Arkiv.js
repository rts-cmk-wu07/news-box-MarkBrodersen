import Sections from "../Sections";
import SearchForm from "../SearchForm";
const Arkiv = () => {
  const ls = localStorage.getItem("archive");
  const data = JSON.parse(ls);
  console.log(data);
  return (
    <main>
      <SearchForm />
      {data && <Sections data={data} />}
    </main>
  );
};

export default Arkiv;
