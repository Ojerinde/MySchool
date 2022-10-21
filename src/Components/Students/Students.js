import Button from "../Button/Button";
import Student from "./Student";

const Students = ({ students }) => {
  return (
    <ul className="students">
      {students.length > 0 ? (
        students.map((student, index) => (
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
  );
};
export default Students;