import { Link, useNavigate } from "react-router-dom";
import { FaCloudShowersHeavy, FaReact, FaNodeJs } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to Altschool Africa</h1>
      <h3>Kindly select any of the track below</h3>
      <p onClick={() => navigate("/users")}>See all staffs (Users)</p>
      <ul>
        <li>
          <FaReact className="home__icon home__icon--1" />
          <Link to="/frontend">
            Frontend
            <br />
            Engineering
          </Link>
        </li>
        <li>
          <FaNodeJs className="home__icon home__icon--2" />
          <Link to="/backend">
            Backend
            <br />
            Engineering
          </Link>
        </li>
        <li>
          <FaCloudShowersHeavy className="home__icon home__icon--3" />
          <Link to="/cloud">
            Cloud <br />
            Engineering
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
