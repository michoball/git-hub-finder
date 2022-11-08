import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext({
  alert: null,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  const value = {
    alert: state,
    setAlert,
  };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertContext;
