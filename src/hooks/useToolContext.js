import { createContext, useState } from "react";

const ToolContext = createContext();

const ToolContextProvider = ({ children }) => {
  const [shapeType, setShapeType] = useState();
  const [color, setColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [polygonSides, setPolygonSides] = useState(5);

  return (
    <ToolContext.Provider
      value={{
        shapeType,
        setShapeType,
        strokeWidth,
        setStrokeWidth,
        color,
        setColor,
        polygonSides,
        setPolygonSides,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export { ToolContext, ToolContextProvider };
