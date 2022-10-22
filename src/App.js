import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";

import { ErrorBoundary } from "react-error-boundary";

import StudentDetails from "./Components/Students/StudentDetails";
import Students from "./Components/Students/Students";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

import { AppContext } from "./store/AppContext";

// Importing all pages dynamically
const Home = lazy(() => import("./Pages/Home/Home"));
const Frontend = lazy(() => import("./Pages/Frontend/Frontend"));
const Backend = lazy(() => import("./Pages/Backend/Backend"));
const Cloud = lazy(() => import("./Pages/Cloud/Cloud"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/ErrorPage"));
const Users = lazy(() => import("./Pages/Users/Users"));

// This is the function that will be called when the error boundary catches an error.
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="error__boundary">
      <p>Oops! An error occurred</p>
      <summary>{props.error.message}</summary>
      <button
        className="error__boundary--button"
        onClick={props.resetErrorBoundary}
      >
        Restart app
      </button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  // Getting data from the created context.
  const { backendStudents, cloudStudents } = useContext(AppContext);

  return (
    <main className="app">
      <section>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          // The function trigerred by the button in the ErrorFallback function
          onReset={() => {
            navigate("/");
          }}
        >
          <Suspense fallback={<LoadingSpinner />}> 
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Nested Route - Method 1: This method enables us to have Routes and Route in the <Users /> and <Frontend /> component */}
              <Route path="/users/*" element={<Users />} />
              <Route path="/frontend/*" element={<Frontend />} />

              {/* Nested Route - Method 2: Using <Outlet /> to render nested route components  */}
              <Route path="/backend" element={<Backend />}>
                <Route
                  path=""
                  element={<Students students={backendStudents} />}
                />
                <Route
                  path=":id"
                  element={<StudentDetails students={backendStudents} />}
                />
                <Route path="*" element={<ErrorPage />} />
              </Route>
              <Route path="/cloud" element={<Cloud />}>
                <Route
                  path=""
                  element={<Students students={cloudStudents} />}
                />
                <Route
                  path=":id"
                  exact
                  element={<StudentDetails students={cloudStudents} />}
                />
                <Route path="*" element={<ErrorPage />} />
              </Route>

              {/* If none of the above route is matched, the below will be matched  */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
};
export default App;
