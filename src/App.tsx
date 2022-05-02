import { styled } from "@stitches/react";
import React from "react";
import Grid from "./components/Grid";
import { WordleContext } from "./context/wordleContext";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  const [word, setWord] = React.useState("");

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
        <input
          type="text"
          maxLength={5}
          onChange={(e) => setWord(e.currentTarget.value)}
        />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
