import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home/Home";
import App from "../App"
import Login from "../components/login/Login";
import Signup from "../components/signup/signup";

import { auth } from "../firebaseconfig";

 

function Routing() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/App" element={< App />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;