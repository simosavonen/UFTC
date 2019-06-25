import React, { useContext } from "react";
import { Context as ChallengeContext } from "../context/ChallengeContext";

const ChallengeList = () => {
  const { state, dispatch } = useContext(ChallengeContext);

  return (
    <div>
      <h3>ChallengeList</h3>
      {state.challenges.map(challenge => (
        <div key={challenge.id}>
          {challenge.name} {challenge.points}
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;
