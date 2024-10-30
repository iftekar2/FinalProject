import React, { useState } from "react";
import styled from "styled-components";

const TaskText = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "grey" : "black")};
  margin-left: 10px;
`;

const GoalItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button``;

function Task({ text, points, completed, onComplete, onDelete }) {
  return (
    <GoalItem>
      <input type="checkbox" checked={completed} onChange={onComplete} />
      <TaskText completed={completed}>{text}</TaskText>
      <span>{points} pts</span>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </GoalItem>
  );
}

export default Task;
