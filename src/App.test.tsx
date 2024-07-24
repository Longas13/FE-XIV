import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render initial tree and allow adding new node in application", () => {
    const { getByText } = render(<App />);

    expect(getByText("Root")).toBeInTheDocument();

    const addButton = getByText("Add Node");

    fireEvent.click(addButton);

    expect(getByText("New Node")).toBeInTheDocument();
  });

  it("should switch between recursive and iterative modes", () => {
    const { getByText } = render(<App />);

    expect(getByText("Recursive Mode")).toBeInTheDocument();

    fireEvent.click(getByText("Iterative Mode"));
    expect(getByText("Iterative Mode")).toBeInTheDocument();
  });
});
