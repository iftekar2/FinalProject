import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

function GoalApp() {
  const [goals, setGoals] = useState({
    Learning: [],
    Health: [],
    Money: [],
  });

  const addGoal = (goalText, category) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [category]: [...prevGoals[category], goalText],
    }));
  };

  return (
    <div>
      <GoalInput addGoal={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
}

export default GoalApp;
