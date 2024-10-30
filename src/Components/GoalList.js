import React from "react";
import styled from "styled-components";

function GoalList({ goals }) {
  return (
    <GoalType>
      <LearningBox>
        <h3>Learning Goals</h3>
        <ul>
          {goals.Learning.map((goal, index) => (
            <li key={index}>{goal.text}</li>
          ))}
        </ul>
      </LearningBox>

      <HealthBox>
        <h3>Health Goals</h3>
        <ul>
          {goals.Health.map((goal, index) => (
            <li key={index}>{goal.text}</li>
          ))}
        </ul>
      </HealthBox>

      <MoneyBox>
        <h3>Money Goals</h3>
        <ul>
          {goals.Money.map((goal, index) => (
            <li key={index}>{goal.text}</li>
          ))}
        </ul>
      </MoneyBox>
    </GoalType>
  );
}

const GoalType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const LearningBox = styled.div`
  color: black;
  background-color: white;
  width: 300px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

const HealthBox = styled.div`
  color: black;
  background-color: white;
  width: 300px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

const MoneyBox = styled.div`
  color: black;
  background-color: white;
  width: 300px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

export default GoalList;
