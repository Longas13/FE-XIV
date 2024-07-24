import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TreeNode from "./index";
import { Category } from "../../utils/types";

const mockCategory: Category = {
  id: "1",
  name: "Root Node",
  children: [{ id: "2", name: "Child Node", children: [] }],
};

describe("TreeNode Component", () => {
  it("should display the category name", () => {
    const { getByText } = render(
      <TreeNode category={mockCategory} onAddNode={() => {}} />
    );
    expect(getByText("Add Node")).toBeInTheDocument();
  });

  it("should call onAddNode with correct id when button is clicked", () => {
    const mockOnAddNode = jest.fn();
    const { getByText } = render(
      <TreeNode category={mockCategory} onAddNode={mockOnAddNode} />
    );
    fireEvent.click(getByText("Add Node"));
    expect(mockOnAddNode).toHaveBeenCalledWith("1");
  });
});
