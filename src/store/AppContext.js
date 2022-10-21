import React, { useCallback, useReducer } from "react";

// Creating a context
export const AppContext = React.createContext({
  frontendStudents: [],
  backendStudents: [],
  cloudStudents: [],
  staffs: [],
  addFrontendStudents: (userData) => {},
  addBackendStudents: (userData) => {},
  addCloudStudents: (userData) => {},
  addStaffs: (userData) => {},
});

const initialState = {
  frontendStudents: [],
  backendStudents: [],
  cloudStudents: [],
  staffs: [],
};

const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FRONTEND_STUDENT":
      return {
        ...state,
        frontendStudents: action.payload,
      };
    case "ADD_BACKEND_STUDENT":
      return {
        ...state,
        backendStudents: action.payload,
      };
    case "ADD_CLOUD_STUDENT":
      return {
        ...state,
        cloudStudents: action.payload,
      };
    case "ADD_STAFF":
      return {
        ...state,
        staffs: action.payload,
      };
    default:
      return state;
  }
};

// Creating a context provider
const AppContextProvider = (props) => {
  const [contextState, dispatchFn] = useReducer(contextReducer, initialState);

  const addFrontendStudents = useCallback((students) => {
    dispatchFn({ type: "ADD_FRONTEND_STUDENT", payload: students });
  }, []);
  const addBackendStudents = useCallback((students) => {
    dispatchFn({ type: "ADD_BACKEND_STUDENT", payload: students });
  }, []);
  const addCloudStudents = useCallback((students) => {
    dispatchFn({ type: "ADD_CLOUD_STUDENT", payload: students });
  }, []);
  const addStaffs = useCallback((staffs) => {
    dispatchFn({ type: "ADD_STAFF", payload: staffs });
  }, []);

  // The data that is provided to all components
  const data = {
    frontendStudents: contextState.frontendStudents,
    backendStudents: contextState.backendStudents,
    cloudStudents: contextState.cloudStudents,
    staffs: contextState.staffs,
    addFrontendStudents,
    addBackendStudents,
    addCloudStudents,
    addStaffs,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
