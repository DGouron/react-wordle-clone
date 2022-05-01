import { styled } from "@stitches/react";
import React from "react";
import Grid from "./components/Grid";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  return (
    <Container>
      <Grid />
    </Container>
  );
}

export default App;
