import React from "react";
import { Link } from "react-router-dom";
import "./OwnerPage.css";
import "../../index.css";
import dogImage from "../../assets/dog.jpg";

const OwnerPage = () => {
  return (
    <div className="owner-page">
      <div className="nav">
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/owner">Owner</Link>
      </div>

      <div className="main">
        <h1>Kanitta(Jha/จ๋า) - Group A - 09</h1>

        <img src={dogImage} alt="Dog" />

        <div className="biography">
          <p>Short Biography:</p>
          <p>
            Hello, my name is Kanitta Ket-in, and I am 25 years old. I am an
            aspiring Junior Software Developer with a strong passion for
            creating user-centric innovations, including in space technology,
            finance, and social impact. I am committed to leveraging my
            technical expertise to develop digital solutions that not only drive
            progress but also create a sustainable and transformative future. I
            also enjoy being alone, eating the same food repeatedly, and
            writing. I am an INFJ personality, focused on doing good and caring
            for the feelings of others, with the aim of creating a positive
            impact on the world. Additionally, I have a keen interest in
            airplanes, spacecraft, and stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerPage;
