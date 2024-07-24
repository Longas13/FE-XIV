import { useState } from "react";
import RecursiveTree from "./components/RecursiveTree";
import IterativeTree from "./components/IterativeTree";
import { Category } from "./types";
import Container from "react-bootstrap/Container";

const initialData: Category[] = [
  { id: "1", name: "Add Tree nodes", children: [] },
];

const App = () => {
  const [categories, setCategories] = useState<Category[]>(initialData);
  const [mode, setMode] = useState<"recursive" | "iterative">("recursive");

  console.log("categories", categories);

  const addNode = (parentId: string) => {
    const newCategory: Category = {
      id: Math.random().toString(),
      name: `New Node`,
      children: [],
    };

    const addCategory = (nodes: Category[]): Category[] => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [...(node.children || []), newCategory],
          };
        } else if (node.children) {
          return { ...node, children: addCategory(node.children) };
        } else {
          return node;
        }
      });
    };

    setCategories(addCategory(categories));
  };

  return (
    <Container>
      <div className="tree-node">
        {/* <button onClick={() => setMode("recursive")}>Recursive Mode</button> */}
        {/* <button onClick={() => setMode("iterative")}>Iterative Mode</button> */}
        {mode === "recursive" ? (
          <RecursiveTree categories={categories} onAddNode={addNode} />
        ) : (
          <IterativeTree categories={categories} onAddNode={addNode} />
        )}
      </div>
    </Container>
  );
};

export default App;
