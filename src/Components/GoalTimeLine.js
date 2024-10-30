import React, { useState } from "react";
import styled from "styled-components";

function GoalTimeLine() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <TimeLine>
        <Today onClick={handleClick} clicked={isClicked}>
          <p>Today's Goals</p>
        </Today>

        <Week>
          <p>Weekly Goals</p>
        </Week>

        <Month>
          <p>Weekly Goals</p>
        </Month>

        <Year>
          <p>Yearly Goals</p>
        </Year>
      </TimeLine>
    </div>
  );
}

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const Today = styled.div`
  background-color: ${({ clicked }) => (clicked ? "black" : "white")};
  color: ${({ clicked }) => (clicked ? "white" : "black")};
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
const Week = styled.div`
  background-color: ${({ clicked }) => (clicked ? "black" : "white")};
  color: ${({ clicked }) => (clicked ? "white" : "black")};
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
const Month = styled.div`
  background-color: ${({ clicked }) => (clicked ? "black" : "white")};
  color: ${({ clicked }) => (clicked ? "black" : "white")};
  background-color: black;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const Year = styled.div`
  background-color: black;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export default GoalTimeLine;
