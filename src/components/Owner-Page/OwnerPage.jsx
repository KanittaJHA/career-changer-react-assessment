import React from "react";
import { Link } from "react-router-dom";
import "./OwnerPage.css";
import "../../index.css";
import dogImage from "../../assets/dog.jpg";

const OwnerPage = () => {

  return (
    <div className="container">
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>

      <div className="main">
        <h1>Kanitta - Group A - 68</h1>

        <img src={dogImage} alt="Dog" />

        <div className="biography">
          <p>Short Biography:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ratione dolore autem modi voluptatem iusto rem in? Perferendis,
            deleniti vel?
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerPage;
