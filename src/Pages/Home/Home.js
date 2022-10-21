import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCloudShowersHeavy, FaReact, FaNodeJs } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="section__home">
      <header className="header__home">
        <nav>
          <img src={logo} alt="AltSchool" className="logo" />
          <ul>
            <li>
              <NavLink
                to="/frontend"
                className={({ isActive }) => (isActive ? "header__active" : "")}
              >
                Frontend
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/backend"
                className={({ isActive }) => (isActive ? "header__active" : "")}
              >
                Backend
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cloud"
                className={({ isActive }) => (isActive ? "header__active" : "")}
              >
                Cloud
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
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
    </section>
  );
};
export default Home;
