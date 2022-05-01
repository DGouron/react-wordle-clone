import { styled } from "@stitches/react";
import * as React from "react";

const StyledLetter = styled("div", {
  fontWeight: "bold",
  fontFamily: "Arial",
  fontSize: "32px",
  textTransform: "uppercase",
});

function Letter() {
  return <StyledLetter>L</StyledLetter>;
}

export default Letter;
