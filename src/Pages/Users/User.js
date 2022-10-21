const User = ({ student }) => {
  return (
    <div>
      <figure>
        <img src={`${student.img}`} alt={`${student.name}`} />
      </figure>
      <div>
        <div className="user__detail-card">
          <h4>Name:</h4>
          <h2>{`${student.title}. ${student.name}`}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Username:</h4>
          <h2>{student.username}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Email:</h4>
          <h2>{student.email}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Phone:</h4>
          <h2>{student.phone}</h2>
        </div>
      </div>
    </div>
  );
};
export default User;
