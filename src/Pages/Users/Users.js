import User from "./User";

const Users = () => {
  const data = [1, 2, 3, 4];
  return (
    <ul>
      {data.map((val, index) => (
        <User key={index} />
      ))}
    </ul>
  );
};
export default Users;
