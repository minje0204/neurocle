import { useState, useEffect, useContext, createContext } from "react";
import { defaultCircle, changeRadius } from "../shapes/utilsCircle";
import { defaultRect, changeWidthHeight } from "../shapes/utilsRectangle";
import { defaultLine, addEndPoint, addCurvePoint } from "../shapes/utilsLine";
import {
  defaultPolygon,
  changeRadius as changePolygonRaidus,
} from "../shapes/utilsPolygons";
import { ToolContext } from "./useToolContext";

let startPoint = [];
let lastModifiedShape = {};

const ShapeContext = createContext();

const ShapeContextProvider = ({ children }) => {
  const { shapeType, strokeWidth, color, polygonSides } =
    useContext(ToolContext);

  const [shapes, setShapes] = useState(
    JSON.parse(window.localStorage.getItem("shapes")) ?? {
      lines: [],
      curves: [],
      circles: [],
      rectangles: [],
      polygons: [],
    }
  );

  useEffect(() => {
    window.localStorage.setItem("shapes", JSON.stringify(shapes));
  }, [shapes]);

  const makeNewShape = (point) => {
    startPoint = point;
    let defaultShape;
    switch (shapeType) {
      case "lines":
      case "curves":
        defaultShape = defaultLine(point, strokeWidth, color);
        break;
      case "circles":
        defaultShape = defaultCircle(point, strokeWidth, color);
        break;
      case "rectangles":
        defaultShape = defaultRect(point, strokeWidth, color);
        break;
      case "polygons":
        defaultShape = defaultPolygon(point, strokeWidth, color, polygonSides);
        break;
      default:
        defaultShape = null;
    }
    if (!defaultShape) {
      console.log("도형 생성 실패");
      return;
    }

    setShapes((prev) => ({
      ...prev,
      [shapeType]: [...prev[shapeType], { ...defaultShape }],
    }));
  };

  const handleShapeDrawing = (point) => {
    let drawingShape = shapes[shapeType][shapes[shapeType].length - 1];
    switch (shapeType) {
      case "lines":
        drawingShape = addEndPoint(drawingShape, point, startPoint);
        break;
      case "curves":
        drawingShape = addCurvePoint(drawingShape, point);
        break;
      case "circles":
        drawingShape = changeRadius(drawingShape, point);
        break;
      case "rectangles":
        drawingShape = changeWidthHeight(drawingShape, point, startPoint);
        break;
      case "polygons":
        drawingShape = changePolygonRaidus(drawingShape, point);
        break;
      default:
        drawingShape = null;
    }
    if (!drawingShape) {
      console.log("도형 그리기 실패");
      return;
    }
    lastModifiedShape = {
      type: shapeType,
      idx: shapes[shapeType].length,
      data: {
        ...drawingShape,
      },
    };
    shapes[shapeType].splice(shapes[shapeType].length - 1, 1, drawingShape);
    setShapes((prev) => ({
      ...prev,
      [shapeType]: shapes[shapeType].concat(),
    }));
  };

  return (
    <ShapeContext.Provider
      value={{
        shapes,
        handleShapeDrawing,
        makeNewShape,
        lastModifiedShape,
        setShapes,
      }}
    >
      {children}
    </ShapeContext.Provider>
  );
};

export { ShapeContext, ShapeContextProvider };
