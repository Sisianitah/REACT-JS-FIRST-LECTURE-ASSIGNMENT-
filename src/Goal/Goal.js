import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

// export name
 function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

export default Goal;
