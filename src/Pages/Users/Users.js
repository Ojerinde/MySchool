import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import StudentDetails from "../../Components/Students/StudentDetails";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import UsersHome from "./UsersHome";

const Users = () => {
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  const { staffs, addStaffs } = useContext(AppContext);

  useEffect(() => {
    const getData = (fetchedData) => {
      addStaffs(fetchedData);
    };
    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=60&?nat=us",
        errorMessage: "Could not fetch staffs",
      },
      getData
    );
  }, [fetchRequest, addStaffs]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {!isLoading && error.hasError && (
        <ErrorModal message={error.message} onClose={closeModal} />
      )}
      <Header />
      <Routes>
        <Route path="" element={<UsersHome students={staffs} />} />
        <Route path=":id" element={<StudentDetails students={staffs} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default Users;
