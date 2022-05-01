import { styled } from "@stitches/react";
import React from "react";
import Square from "./Square";

const StyledRow = styled("div", {
  height: "100%",
  display: "flex",
  gap: "10px",
});

function Row() {
  return (
    <StyledRow>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </StyledRow>
  );
}

export default Row;
