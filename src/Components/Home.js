import React from "react";
import "./Home.css";
import GoalTimeLine from "./GoalTimeLine";

function Home() {
  return (
    <div className="HomeClass">
      <div className="home">
        <div className="title">
          <h2>Today's Goals</h2>
        </div>
        <GoalTimeLine />
      </div>
    </div>
  );
}

export default Home;
