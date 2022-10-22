import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import StudentDetails from "../../Components/Students/StudentDetails";
import Students from "../../Components/Students/Students";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";

import ErrorPage from "../ErrorPage/ErrorPage";

const Frontend = () => {
  // Using the created custom hook and destructuring at the same time
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  // Getting data from the created context
  const { frontendStudents, addFrontendStudents } = useContext(AppContext);

  useEffect(() => {
    // This is the function that will get the transfromed data from the useFetch hook. Then to the context
    const getData = (fetchedData) => {
      addFrontendStudents(fetchedData);
    };
    
    // Sending the request using the async function created in the useFecth hook
    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50&?nat=de,dk,es,fi",
        errorMessage: "Could not fetch frontend students",
      },
      getData
    );
  }, [fetchRequest, addFrontendStudents]);

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
        <Route path="" element={<Students students={frontendStudents} />} />
        <Route
          path=":id"
          element={<StudentDetails students={frontendStudents} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default Frontend;
