import { Category } from "../../types";
import TreeNode from "../TreeNode";

interface RecursiveTreeProps {
  categories: Category[];
  onAddNode: (parentId: string) => void;
}

const RecursiveTree = ({ categories, onAddNode }: RecursiveTreeProps) => {
  return (
    <div>
      {categories.map((category) => (
        <TreeNode key={category.id} category={category} onAddNode={onAddNode} />
      ))}
    </div>
  );
};

export default RecursiveTree;
