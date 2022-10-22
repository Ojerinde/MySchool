import { useState } from "react";
import Button from "../../Components/Button/Button";
import User from "./User";
import UserPagination from "./UserPagination";

const staffPerPage = 6;

const UsersHome = ({ students }) => {
  const [start, setStart] = useState(0);
  const end = start + staffPerPage;

  const changePageHandler = (newPage) => {
    setStart((pag) => newPage * staffPerPage - staffPerPage);
  };

  return (
    <>
      {students.length > 0 && (
        <p className="track">School of Engineering staffs</p>
      )}
      <ul className="all__users">
        {students.length > 0 ? (
          students
            .slice(start, end)
            .map((student, index) => (
              <User
                key={index}
                id={student.username}
                fullname={student.name}
                img={student.img}
                username={student.username}
                email={student.email}
                phone={student.phone}
              />
            ))
        ) : (
          <p className="no__student">
            No staff founds
            <span>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </span>
          </p>
        )}
      </ul>
      {students.length > 0 && (
        <UserPagination
          staffPerPage={staffPerPage}
          totalStudents={students.length}
          onChange={changePageHandler}
        />
      )}
    </>
  );
};
export default UsersHome;
