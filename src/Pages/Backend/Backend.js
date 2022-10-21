import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";

const Backend = () => {
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  const { addBackendStudents } = useContext(AppContext);

  useEffect(() => {
    const getData = (fetchedData) => {
      addBackendStudents(fetchedData);
    };

    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50&?nat=au,br,ca,ch",
        errorMessage: "Could not fetch backend students",
      },
      getData
    );
  }, [fetchRequest, addBackendStudents]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {!isLoading && error.hasError && (
        <ErrorModal message={error.message} onClose={closeModal} />
      )}
      <Outlet />
    </>
  );
};
export default Backend;
