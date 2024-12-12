import React, { useState } from "react";
import styled from "styled-components";

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      onSignIn(user);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button type="submit">Sign In</Button>
      </AuthForm>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AuthForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #8cd3c5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #7bc2b4;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 0.5rem 0;
`;

export default SignIn;
