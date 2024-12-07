import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, loadUsers, updateUser } from "../redux/action";

const Adduser = () => {
  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const [error, setError] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { id } = useParams(); // Get the user ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    console.log("Users:", users);
    console.log("ID from URL:", id);
    if (id) {
      const userToEdit = users.find((user) => user.id === Number(id));
      console.log("User to Edit:", userToEdit);
      if (userToEdit) {
        setState(userToEdit);
      }
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.address || !state.email || !state.contact) {
      setError("Please fill in all fields.");
    } else {
      if (id) {
        // Update user logic
        dispatch(updateUser(id, state)); // Dispatch updated data
      } else {
        // Add new user logic
        dispatch(addUser(state));
      }
      navigate("/"); // Redirect to the home page
      setError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, email, contact, address } = state;

  return (
    <div>
      <h1>{id ? "Edit User" : "Add User"}</h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          style={inputStyle}
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          style={inputStyle}
          value={email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="contact"
          placeholder="Enter Contact"
          style={inputStyle}
          value={contact}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          style={inputStyle}
          value={address}
          onChange={handleChange}
        />
        <button type="submit" style={buttonStyle}>
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Adduser;
