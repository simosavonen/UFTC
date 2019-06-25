import React, { useContext } from "react";
import { Context as ChallengeContext } from "../context/ChallengeContext";

const Navigation = () => {
  const { state, /* dispatch */ } = useContext(ChallengeContext);

  return (
    <div>
      <h3>Logged in as {state.user.name}</h3>
    </div>
  );
};

export default Navigation;
