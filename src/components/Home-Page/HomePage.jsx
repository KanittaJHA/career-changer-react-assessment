import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import "../../index.css";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>

      <div className="main">
        <h1>Generation Thailand React - Assessment</h1>

        <div className="buttons">
          <button onClick={() => navigate("/user")}>User Home Section</button>
          <button onClick={() => navigate("/admin")}>Admin Home Section</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
