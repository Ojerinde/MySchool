import { NavLink, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

const Header = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <header className="main__header">
      <div className="logo">
        <ImHome className="home__icon" onClick={goHomeHandler} />
        <h3>AltSchool</h3>
      </div>
      <nav>
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
  );
};
export default Header;
