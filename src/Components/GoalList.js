// import React from "react";
// import styled from "styled-components";

// function GoalList({ goals }) {
//   return (
//     <GoalType>
//       <LearningBox>
//         <h3>Learning Goals</h3>
//         <ul>
//           {goals.Learning.map((goal, index) => (
//             <li key={index}>{goal.text}</li>
//           ))}
//         </ul>
//       </LearningBox>

//       <HealthBox>
//         <h3>Health Goals</h3>
//         <ul>
//           {goals.Health.map((goal, index) => (
//             <li key={index}>{goal.text}</li>
//           ))}
//         </ul>
//       </HealthBox>

//       <MoneyBox>
//         <h3>Money Goals</h3>
//         <ul>
//           {goals.Money.map((goal, index) => (
//             <li key={index}>{goal.text}</li>
//           ))}
//         </ul>
//       </MoneyBox>
//     </GoalType>
//   );
// }

// const GoalType = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const LearningBox = styled.div`
//   color: black;
//   background-color: white;
//   width: 300px;
//   padding-left: 20px;
//   padding-top: 20px;
//   border-radius: 10px;
//   font-size: 20px;
// `;

// const HealthBox = styled.div`
//   color: black;
//   background-color: white;
//   width: 300px;
//   padding-left: 20px;
//   padding-top: 20px;
//   border-radius: 10px;
//   font-size: 20px;
// `;

// const MoneyBox = styled.div`
//   color: black;
//   background-color: white;
//   width: 300px;
//   padding-left: 20px;
//   padding-top: 20px;
//   border-radius: 10px;
//   font-size: 20px;
// `;

// export default GoalList;

import React from "react";
import styled from "styled-components";

function GoalList({ goals, onComplete, onDelete }) {
  return (
    <GoalType>
      <LearningBox>
        <h3>Learning Goals</h3>
        <ul>
          {goals.Learning.map((goal, index) => (
            <GoalItem key={index} completed={goal.completed}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Learning", index)}
              />
              {goal.text}
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
            <GoalItem key={index} completed={goal.completed}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Health", index)}
              />
              {goal.text}
              <button onClick={() => onDelete("Health", index)}>Delete</button>
            </GoalItem>
          ))}
        </ul>
      </HealthBox>

      <MoneyBox>
        <h3>Money Goals</h3>
        <ul>
          {goals.Money.map((goal, index) => (
            <GoalItem key={index} completed={goal.completed}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => onComplete("Money", index)}
              />
              {goal.text}
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

const LearningBox = styled(GoalBox)``;
const HealthBox = styled(GoalBox)``;
const MoneyBox = styled(GoalBox)``;

const GoalItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#aaa" : "black")};
`;

export default GoalList;
