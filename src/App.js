import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";

function App() {
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  if (!user) {
    return (
      <AuthWrapper>
        {isSignUp ? (
          <>
            <SignUp onSignUp={handleSignIn} />
            <SwitchButton onClick={() => setIsSignUp(false)}>
              Already have an account? Sign In
            </SwitchButton>
          </>
        ) : (
          <>
            <SignIn onSignIn={handleSignIn} />
            <SwitchButton onClick={() => setIsSignUp(true)}>
              Need an account? Sign Up
            </SwitchButton>
          </>
        )}
      </AuthWrapper>
    );
  }

  return (
    <AppContainer>
      <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      <Home user={user} />
    </AppContainer>
  );
}

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #8cd3c5;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: underline;

  &:hover {
    color: #7bc2b4;
  }
`;

const SignOutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background-color: #8cd3c5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7bc2b4;
  }
`;

export default App;
