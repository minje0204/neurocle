import { Layer, Line, Circle, Rect, RegularPolygon } from "react-konva";

const CustomLayer = ({ shapes }) => {
  const { lines, curves, circles, rectangles, polygons } = shapes;
  return (
    <Layer>
      {lines.map((line, i) => (
        <Line
          key={`line-${i}`}
          points={line.points}
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
        />
      ))}
      {curves.map((line, i) => (
        <Line
          key={`curve-${i}`}
          points={line.points}
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
        />
      ))}
      {circles.map((circle, i) => (
        <Circle
          key={`circle-${i}`}
          x={circle.x}
          y={circle.y}
          radius={circle.radius}
          stroke={circle.stroke}
          strokeWidth={circle.strokeWidth}
          tension={0.5}
          globalCompositeOperation={
            circle.tool === "eraser" ? "destination-out" : "source-over"
          }
        />
      ))}
      {rectangles.map((rectangle, i) => (
        <Rect
          key={`rectangle-${i}`}
          x={rectangle.x}
          y={rectangle.y}
          width={rectangle.width}
          height={rectangle.height}
          stroke={rectangle.stroke}
          strokeWidth={rectangle.strokeWidth}
        />
      ))}
      {polygons.map((polygon, i) => (
        <RegularPolygon
          key={`polygon-${i}`}
          x={polygon.x}
          y={polygon.y}
          sides={polygon.sides}
          radius={polygon.radius}
          stroke={polygon.stroke}
          strokeWidth={polygon.strokeWidth}
        />
      ))}
    </Layer>
  );
};

export default CustomLayer;
