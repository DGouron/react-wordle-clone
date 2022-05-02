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

const wordReducer = (prevWord: string, key: string) => {
  switch (key) {
    case "Backspace":
      return prevWord.slice(0, -1);
    default:
      const newWord = `${prevWord}${key}`;
      const isWordLengthOk = newWord.length < 6;
      if (isWordLengthOk) {
        return newWord;
      }
      return prevWord;
  }
};

function App() {
  const [word, setWord] = React.useReducer(wordReducer, "");

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => setWord(event.key);

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
