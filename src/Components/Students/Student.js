import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Student = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const LearnMoreHandler = () => {
    navigate(`${pathname}/${props.id}`);
  };
  return (
    <li className="student">
      <div className="student__detail">
        <h2>{props.fullname}</h2>
        <h4>{props.location}</h4>
      </div>
      <Button className="student__button" onClick={LearnMoreHandler}>
        Learn more
      </Button>
    </li>
  );
};
export default Student;
