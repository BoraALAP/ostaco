import React, { useReducer, useContext } from "react";
import App from "next/app";
import appContext from "../context/context";
import appReducer, { initialState } from "../context/reducer";

import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/theme";
import GlobalStyle from "../styles/global";

const MyApp = props => {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <appContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={store.theme ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <App {...props} />
      </ThemeProvider>
    </appContext.Provider>
  );
};

export default MyApp;
