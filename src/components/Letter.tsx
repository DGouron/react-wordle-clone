import { styled } from "@stitches/react";
import * as React from "react";

interface ILetter {
  word: string;
}

const StyledLetter = styled("div", {
  fontWeight: "bold",
  fontFamily: "Arial",
  fontSize: "32px",
  textTransform: "uppercase",
});

function Letter(props: ILetter) {
  return <StyledLetter>{props.word}</StyledLetter>;
}

export default Letter;
