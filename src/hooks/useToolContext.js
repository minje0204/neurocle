import { createContext, useState } from "react";

const ToolContext = createContext();

const ToolContextProvider = ({ children }) => {
  const [tool, setTool] = useState();
  const [color, setColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(5);

  return (
    <ToolContext.Provider
      value={{ tool, setTool, strokeWidth, setStrokeWidth, color, setColor }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export { ToolContext, ToolContextProvider };
