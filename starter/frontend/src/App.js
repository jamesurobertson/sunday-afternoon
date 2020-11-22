import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HooksDemo from "./components/Hooksdemo";

function App() {
  //   const dispatch = useDispatch();
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   useEffect(() => {
  //     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  //   }, [dispatch]);

  return <HooksDemo />;
}

export default App;
