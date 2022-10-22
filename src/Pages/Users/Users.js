import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { AppContext } from "../../store/AppContext";

import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import StudentDetails from "../../Components/Students/StudentDetails";
import useFetch from "../../hooks/useFetch";
import ErrorPage from "../ErrorPage/ErrorPage";
import UsersHome from "./UsersHome";

const Users = () => {
  // Using the created custom hook and destructuring at the same time
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  // Getting data from the created context
  const { staffs, addStaffs } = useContext(AppContext);

  useEffect(() => {
    // This is the function that will get the transfromed data from the useFetch hook
    const getData = (fetchedData) => {
      addStaffs(fetchedData);
    };
    // Sending the request using the async function created in the useFecth hook
    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=60&?nat=us",
        errorMessage: "Could not fetch staffs",
      },
      getData
    );
  }, [fetchRequest, addStaffs]);

  // API loading state
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
