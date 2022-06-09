import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="arkiv">Arkiv</Link>
        </li>
        <li>
          <Link to="home">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
