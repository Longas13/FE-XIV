import { Category } from "../../utils/types";

interface TreeNodeProps {
  category: Category;
  onAddNode: (parentId: string) => void;
}

const TreeNode = ({ category, onAddNode }: TreeNodeProps) => {
  console.log("Category", category);
  return (
    <div
      //   style={{ marginLeft: "20px" }}
      className="single-node"
    >
      <div>
        {category.name}
        <button onClick={() => onAddNode(category.id)}>Add Child</button>
      </div>
      {category.children && (
        <div>
          {category.children.map((child) => (
            <TreeNode key={child.id} category={child} onAddNode={onAddNode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
