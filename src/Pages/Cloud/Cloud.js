import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";

const Cloud = () => {
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  const { addCloudStudents } = useContext(AppContext);

  useEffect(() => {
    const getData = (fetchedData) => {
      addCloudStudents(fetchedData);
    };

    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50&?nat=fr,gb,ie,nl,nz,us",
        errorMessage: "Could not fetch cloud students",
      },
      getData
    );
  }, [fetchRequest, addCloudStudents]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {!isLoading && error.hasError && (
        <ErrorModal message={error.message} onClose={closeModal} />
      )}
      <Header />
      <Outlet />
    </>
  );
};
export default Cloud;
