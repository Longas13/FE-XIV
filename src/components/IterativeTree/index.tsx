import { Category } from "../../utils/types";

interface IterativeTreeProps {
  categories: Category[];
  onAddNode: (parentId: string) => void;
}

const IterativeTree = ({ categories, onAddNode }: IterativeTreeProps) => {
  const renderTree = (categories: Category[]) => {
    const stack: { node: Category; children: JSX.Element[] }[] = [];
    const result: JSX.Element[] = [];

    categories.forEach((category) => {
      stack.push({ node: category, children: [] });
    });

    while (stack.length > 0) {
      const { node } = stack.pop()!;
      result.push(
        <div key={node.id} style={{ marginLeft: "20px" }}>
          <div>
            {node.name}
            <button onClick={() => onAddNode(node.id)}>Add Node</button>
          </div>
          {node.children && (
            <div>
              {node.children.map((child: any) => {
                stack.push({ node: child, children: [] });
                return null;
              })}
            </div>
          )}
        </div>
      );
    }

    return result;
  };

  return <div>{renderTree(categories)}</div>;
};

export default IterativeTree;
