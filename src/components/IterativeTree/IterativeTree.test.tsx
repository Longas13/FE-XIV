import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IterativeTree from "./index";
import { Category } from "../../utils/types";

const mockCategories: Category[] = [{ id: "1", name: "Root", children: [] }];

describe("IterativeTree Component", () => {
  it("should render categories", () => {
    const { getByText } = render(
      <IterativeTree categories={mockCategories} onAddNode={() => {}} />
    );
    expect(getByText("Root")).toBeInTheDocument();
  });

  it("should call onAddNode with correct id", () => {
    const mockOnAddNode = jest.fn();
    const { getByText } = render(
      <IterativeTree categories={mockCategories} onAddNode={mockOnAddNode} />
    );
    fireEvent.click(getByText("Add Node"));
    expect(mockOnAddNode).toHaveBeenCalledWith("1");
  });
});
