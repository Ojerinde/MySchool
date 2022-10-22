import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import Student from "./Student";

const questionPerPage = 5;

const Students = ({ students }) => {
  const [start, setStart] = useState(0);
  const end = start + questionPerPage;

  // The function that will get the page number from the pagnation component
  const changePageHandler = (newPage) => {
    setStart((pag) => newPage * questionPerPage - questionPerPage);
  };

  // Getting the track name from the url
  const { pathname } = useLocation();

  return (
    <>
      {students.length > 0 && (
        <p className="track">{pathname.slice(1)} Engineering Students</p>
      )}
      <div className="student__box">
        <ul className="students">
          {students.length > 0 ? (
            students
              .slice(start, end)
              .map((student, index) => (
                <Student
                  key={index}
                  id={student.username}
                  fullname={student.name}
                  location={student.location}
                />
              ))
          ) : (
            <p className="no__student">
              No student founds
              <span>
                <Button onClick={() => window.location.reload()}>Retry</Button>
              </span>
            </p>
          )}
        </ul>
        {students.length > 0 && (
          <Pagination
            questionPerPage={questionPerPage}
            totalStudents={students.length}
            onChange={changePageHandler}
          />
        )}
      </div>
    </>
  );
};
export default Students;
