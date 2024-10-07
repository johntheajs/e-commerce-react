import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser({ email, password });
      localStorage.setItem("token", token); // Store token in local storage
      navigate("/home"); // Redirect to home after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center pt-5">
    <div className="login-page card w-25" style={{width: 400, alignContent: "center", marginTop: 350, marginLeft: 550}}>
      <h2 className="card-title">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
      <p >
        Don't have an account? <a href="/signup" className="btn btn-primary">Sign Up</a>
      </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
