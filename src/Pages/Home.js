import apiContext from "../context/apiContext";
import { useContext } from "react";
import Sections from "../Sections";
import SearchForm from "../SearchForm";
const Home = () => {
  const data = useContext(apiContext);
  return (
    <main>
      <SearchForm />
      {data && <Sections data={data} />}
    </main>
  );
};

export default Home;
