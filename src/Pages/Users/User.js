import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const User = (student) => {
  const navigate = useNavigate();
  return (
    <div className="user__card">
      <div className="user__box user__box--front">
        <figure>
          <img src={`${student?.img}`} alt={`${student?.fullname}`} />
        </figure>
        <div className="user__detail-box">
          <div className="user__detail-card">
            <h4>Name:</h4>
            <h2>{student.fullname}</h2>
          </div>
          <div className="user__detail-card">
            <h4>Username:</h4>
            <h2>{student?.username}</h2>
          </div>
          <div className="user__detail-card">
            <h4>Email:</h4>
            <h2>{student?.email}</h2>
          </div>
          <div className="user__detail-card">
            <h4>Phone:</h4>
            <h2>{student?.phone}</h2>
          </div>
        </div>
      </div>
      <div className="user__box user__box--back">
        <Button onClick={() => navigate(`/users/${student.username}`)}>
          See more
        </Button>
      </div>
    </div>
  );
};
export default User;
