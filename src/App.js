import React from "react";
import { Provider as ChallengeProvider } from "./context/ChallengeContext";
import Navigation from "./components/Navigation";
import ChallengeList from "./components/ChallengeList";

const App = () => {
  return (
    <ChallengeProvider>
      <div>
        <Navigation />
        <h1>UFTC Ultimate something something</h1>
        <ChallengeList />
      </div>
    </ChallengeProvider>
  );
};

export default App;
