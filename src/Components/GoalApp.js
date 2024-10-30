// import React, { useState } from "react";
// import GoalInput from "./GoalInput";
// import GoalList from "./GoalList";

// function GoalApp() {
//   const [goals, setGoals] = useState({
//     Learning: [],
//     Health: [],
//     Money: [],
//   });

//   const addGoal = (text, category) => {
//     const randomPoints = Math.floor(Math.random() * 6) + 5;
//     const newGoal = { text, points: randomPoints, completed: false };

//     setGoals((prevGoals) => ({
//       ...prevGoals,
//       [category]: [...prevGoals[category], newGoal],
//     }));

//     console.log("New goal added:", newGoal);
//     console.log("Updated goals state:", goals);
//   };

//   const handleComplete = (category, index) => {
//     setGoals((prevGoals) => ({
//       ...prevGoals,
//       [category]: prevGoals[category].map((goal, i) =>
//         i === index ? { ...goal, completed: !goal.completed } : goal
//       ),
//     }));
//   };

//   const handleDelete = (category, index) => {
//     setGoals((prevGoals) => ({
//       ...prevGoals,
//       [category]: prevGoals[category].filter((_, i) => i !== index),
//     }));
//   };

//   return (
//     <div>
//       <GoalInput addGoal={addGoal} />
//       <GoalList
//         goals={goals}
//         onComplete={handleComplete}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default GoalApp;

import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

function GoalApp() {
  const [goals, setGoals] = useState({
    Learning: [],
    Health: [],
    Money: [],
  });

  const addGoal = (text, category) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [category]: [
        ...prevGoals[category],
        { text, points: 10, completed: false },
      ],
    }));
  };

  const handleComplete = (category, index) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [category]: prevGoals[category].map((goal, i) =>
        i === index ? { ...goal, completed: !goal.completed } : goal
      ),
    }));
  };

  const handleDelete = (category, index) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [category]: prevGoals[category].filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <GoalInput addGoal={addGoal} />
      <GoalList
        goals={goals}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default GoalApp;
