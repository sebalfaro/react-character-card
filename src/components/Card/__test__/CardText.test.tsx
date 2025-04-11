import { render, screen } from "@testing-library/react";
import { CardText } from "../CardText";

describe("CardText", () => {
  it("renders the given text", () => {
    render(<CardText>Humano</CardText>);
    expect(screen.getByText("Humano")).toBeInTheDocument();
  });
});
