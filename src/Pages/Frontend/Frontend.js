import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import StudentDetails from "../../Components/Students/StudentDetails";
import Students from "../../Components/Students/Students";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";

import ErrorPage from "../ErrorPage/ErrorPage";

const Frontend = () => {
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  const { frontendStudents, addFrontendStudents } = useContext(AppContext);

  useEffect(() => {
    const getData = (fetchedData) => {
      addFrontendStudents(fetchedData);
    };

    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50&?nat=de,dk,es,fi",
        errorMessage: "Could not fetch frontend students",
      },
      getData
    );
  }, [fetchRequest, addFrontendStudents]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {!isLoading && error.hasError && (
        <ErrorModal message={error.message} onClose={closeModal} />
      )}
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
