import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./HomePageUser.css";
import "../../index.css";

const HomePageUser = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    } finally {
      console.log("Fetch members attempt finished");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>

      <div className="main">
        <h1>Generation Thailand Home - User Section</h1>

        <div className="buttons">
          <button onClick={() => navigate("/user")}>User Home Section</button>
          <button onClick={() => navigate("/admin")}>Admin Home Section</button>
        </div>

        <div className="table-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.lastname}</td>
                    <td>{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageUser;
