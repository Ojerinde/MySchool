import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";

const Cloud = () => {
  // Using the created custom hook and destructuring at the same time
  const { isLoading, error, closeModal, fetchRequest } = useFetch();

  // Getting data from the created context
  const { addCloudStudents } = useContext(AppContext);

  useEffect(() => {
    // This is the function that will get the transfromed data from the useFetch hook. Then to the context
    const getData = (fetchedData) => {
      addCloudStudents(fetchedData);
    };

    // Sending the request using the async function created in the useFecth hook
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
      {/* The enables the nested routes */}
      <Outlet />
    </>
  );
};
export default Cloud;
