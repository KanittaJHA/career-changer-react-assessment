import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./HomePageAdmin.css";
import "../../index.css";

const HomePageAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users!", error);
    }
  };

  const addUser = async () => {
    if (newUser.name && newUser.lastname && newUser.position) {
      try {
        const response = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members",
          newUser
        );
        setUsers([...users, response.data]);
        setNewUser({ name: "", lastname: "", position: "" });
      } catch (error) {
        console.error("Error adding user!", error);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const deleteUser = async (userId) => {
    // console.log("Trying to delete user with ID:", userId); 
  
    try {
      const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/members/${userId}`);
      console.log("Delete response:", response);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user!", error.response?.data || error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>

      <div className="main">
        <h1>Generation Thailand Home - Admin Sector</h1>

        <div className="buttons">
          <button onClick={() => navigate("/user")}>User Home Section</button>
          <button onClick={() => navigate("/admin")}>Admin Home Section</button>
        </div>

        <div className="create-users">
          <h2>Create User Here</h2>
          <div className="user-input">
            <input
              type="text"
              placeholder="First Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={newUser.lastname}
              onChange={(e) =>
                setNewUser({ ...newUser, lastname: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Position"
              value={newUser.position}
              onChange={(e) =>
                setNewUser({ ...newUser, position: e.target.value })
              }
            />

            <div className="input-btn">
              <button onClick={addUser}>Save</button>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.position}</td>
                  <td>
                    <span onClick={() => deleteUser(user.id)}> Delete </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;