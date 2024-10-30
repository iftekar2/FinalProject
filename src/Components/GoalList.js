import React from "react";
import styled from "styled-components";

function GoalList({ goals, onComplete, onDelete }) {
  return (
    <GoalType>
      <LearningBox>
        <h3>Learning Goals</h3>
        <ul>
          {goals.Learning.map((goal, index) => (
            <GoalItem key={index}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Learning", index)}
              />
              <GoalText completed={goal.completed}>{goal.text}</GoalText>
              <button onClick={() => onDelete("Learning", index)}>
                Delete
              </button>
            </GoalItem>
          ))}
        </ul>
      </LearningBox>

      <HealthBox>
        <h3>Health Goals</h3>
        <ul>
          {goals.Health.map((goal, index) => (
            <GoalItem key={index}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Health", index)}
              />
              <GoalText completed={goal.completed}>{goal.text}</GoalText>
              <button onClick={() => onDelete("Health", index)}>Delete</button>
            </GoalItem>
          ))}
        </ul>
      </HealthBox>

      <MoneyBox>
        <h3>Money Goals</h3>
        <ul>
          {goals.Money.map((goal, index) => (
            <GoalItem key={index}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Money", index)}
              />
              <GoalText completed={goal.completed}>{goal.text}</GoalText>
              <button onClick={() => onDelete("Money", index)}>Delete</button>
            </GoalItem>
          ))}
        </ul>
      </MoneyBox>
    </GoalType>
  );
}

const GoalType = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

const GoalBox = styled.div`
  color: black;
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

const LearningBox = styled(GoalBox)`
  ul {
    padding: 0;
  }

  button {
    height: 40px;
    width: 80px;
    background-color: red;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
  }
`;
const HealthBox = styled(GoalBox)`
  ul {
    padding: 0;
  }

  button {
    height: 40px;
    width: 80px;
    background-color: red;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
  }
`;
const MoneyBox = styled(GoalBox)`
  ul {
    padding: 0;
  }

  button {
    height: 40px;
    width: 80px;
    background-color: red;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
  }
`;

const GoalItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#aaa" : "black")};
`;

const GoalText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  margin: 0 10px;
`;

export default GoalList;
