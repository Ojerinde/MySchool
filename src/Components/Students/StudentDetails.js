import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

const StudentDetails = ({ students }) => {
  const params = useParams();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lastIndexOfSlash = pathname.lastIndexOf("/");

  const student = students.find((student) => student.id === params.id);
  console.log(student)
  //   Today's date
  //   const now = new Date();
  //   const options = {
  //     weekday: "long",
  //     month: "long",
  //     year: "numeric",
  //   };
  //   const locale = navigator.language;
  //   const date = new Intl.DateTimeFormat(locale, options).format(now);

  //   Creating Student date of birth

  const dob = new Date(`${student?.date}`);

  //   Getting the day, month and year from the created date of birth
  const day = `${dob.getDate()}`.padStart(2, 0);
  const month = `${dob.getMonth()}`.padStart(2, 0);
  const year = dob.getFullYear();

  //   Formatting the D.O.B
  const formattedDob = `${day}/${month}/${year}`;

  const goBackHandler = () => {
    navigate(`${pathname.slice(0, lastIndexOfSlash)}`);
  };

  return (
    <>
      <Button onClick={goBackHandler} className="back__button">Go Back</Button>
      {student ? <div className="detail__card">
        <figure>
          <img src={`${student.img}`} alt={`${student.name}`} />
        </figure>
        <div className="detail__box">
          <div className="detail__box--card">
            <h4>Name:</h4>
            <h2>{`${student.title}. ${student.name}`}</h2>
          </div>
          <div className="detail__box--card">
            <h4>Username:</h4>
            <h2>{student.username}</h2>
          </div>
          <div className="detail__box--card">
            <h4>Email:</h4>
            <h2>{student.email}</h2>
          </div>
          <div className="detail__box--card">
            <h4>Phone:</h4>
            <h2>{student.phone}</h2>
          </div>
          <div className="detail__box--cards">
            <div>
              <h4>Age:</h4>
              <h2>{student.age}</h2>
            </div>
            <div>
              <h4>D.O.B:</h4>
              <h2>{formattedDob}</h2>
            </div>
          </div>
          <div className="detail__box--cards">
            <div>
              <h4>Address:</h4>
              <h2>{student.address}</h2>
            </div>
            <div>
              <h4>Country:</h4>
              <h2>{student.country}</h2>
            </div>
          </div>
          <div className="detail__box--cards">
            <div>
              <h4>City:</h4>
              <h2>{student.city}</h2>
            </div>
            <div>
              <h4>State:</h4>
              <h2>{student.state}</h2>
            </div>
          </div>
        </div>
      </div> : <h1>Student not found</h1>}
    </>
  );
};
export default StudentDetails;
