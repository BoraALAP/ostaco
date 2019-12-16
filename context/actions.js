import { useContext } from "react";
import { TOGGLE_FORM } from "./types";
import appContext from "./context";

export const toggleForm = () => {
  const { dispatch } = useContext(appContext);
  console.log("nana");

  dispatch({ type: TOGGLE_FORM });
};
