import { styled } from "@stitches/react";
import * as React from "react";
import Letter from "./Letter";

const StyledSquare = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "2px solid #d3d6da",
});

function Square() {
  return (
    <StyledSquare>
      <Letter />
    </StyledSquare>
  );
}

export default Square;
