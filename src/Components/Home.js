import React from "react";
import "./Home.css";
import GoalTimeLine from "./GoalTimeLine";
import Inputs from "./Inputs";

function Home() {
  return (
    <div className="HomeClass">
      <div className="home">
        <div className="title">
          <h2>Today's Goals</h2>
        </div>
        <GoalTimeLine />
        <Inputs />
      </div>
    </div>
  );
}

export default Home;
