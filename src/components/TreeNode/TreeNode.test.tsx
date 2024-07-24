import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TreeNode from "./index";
import { Category } from "../../utils/types";

const mockCategory: Category = {
  id: "11",
  name: "Root Node",
  children: [{ id: "2", name: "Child Node", children: [] }],
};

describe("TreeNode Component", () => {
  it("should display the category name", () => {
    const { getByText } = render(
      <TreeNode category={mockCategory} onAddNode={() => {}} />
    );
    expect(getByText("Root Node")).toBeInTheDocument();
    expect(getByText("Child Node")).toBeInTheDocument();
  });

  it("should call onSetParentId with correct id when button is clicked", () => {
    const mockOnSetParentId = jest.fn();
    const { getByText } = render(
      <TreeNode category={mockCategory} onAddNode={mockOnSetParentId} />
    );
    fireEvent.click(getByText("Select Parent"));
    expect(mockOnSetParentId).toHaveBeenCalledWith("1");
  });
});
