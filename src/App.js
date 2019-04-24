import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalSwitch from "./ModalSwitch";

const App = () => {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
};

export default App;
