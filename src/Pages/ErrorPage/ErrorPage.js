import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error__page">
      <p>Seems as if you are lost in the cloud.</p>
      <h2> Error 404! This page doesn't exist.</h2>
      <Button onClick={() => navigate("/")}> Go Home</Button>
    </div>
  );
};
export default ErrorPage;
