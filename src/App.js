import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import DefaultContainer from "./containers/defaultContainer";
import Home from "./pages/homePage";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DefaultContainer children={<Home />} />} />
        <Route path="*" element={<DefaultContainer children={<NotFound />} />} />
      </Routes>
    </Router>
  );
}

export default App;
