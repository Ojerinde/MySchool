import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";

import { ErrorBoundary } from "react-error-boundary";

import StudentDetails from "./Components/Students/StudentDetails";
import Students from "./Components/Students/Students";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import { AppContext } from "./store/AppContext";
import Users from "./Pages/Users/Users";

// Dynamic imports
const Home = lazy(() => import("./Pages/Home/Home"));
const Frontend = lazy(() => import("./Pages/Frontend/Frontend"));
const Backend = lazy(() => import("./Pages/Backend/Backend"));
const Cloud = lazy(() => import("./Pages/Cloud/Cloud"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/ErrorPage"));

// Error fallback component
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="error__boundary">
      <p>Something went wrong!</p>
      <summary>{props.error.message}</summary>
      <button
        className="error__boundary--button"
        onClick={props.resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  const { backendStudents, cloudStudents } = useContext(AppContext);

  return (
    <main className="app">
      <section>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            navigate("/");
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Nested Route - Method 1: This method enables us to have Routes and Route in the <Frontend /> component */}
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
              </Route>

              <Route path="/users" element={<Users />} />

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
