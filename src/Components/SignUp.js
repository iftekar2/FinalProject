import React, { useState } from "react";
import styled from "styled-components";

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.username === formData.username)) {
      setError("Username already exists");
      return;
    }

    const newUser = {
      username: formData.username,
      password: formData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    onSignUp(newUser);
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <Button type="submit">Sign Up</Button>
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

export default SignUp;
