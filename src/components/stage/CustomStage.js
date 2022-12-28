import { useContext, useEffect, useRef, useState } from "react";
import { Circle, Layer, Line, Stage } from "react-konva";
import styled from "styled-components";
import { ToolContext } from "../../hooks/useToolContext";

let startPoint = [];
const CustomStage = () => {
  const { tool, strokeWidth, color } = useContext(ToolContext);
  const [lines, setLines] = useState(
    JSON.parse(window.localStorage.getItem("lines") ?? "[]")
  );
  const [circles, setCircles] = useState(
    JSON.parse(window.localStorage.getItem("circles") ?? "[]")
  );

  const isDrawing = useRef(false);
  useEffect(() => {
    if (lines) {
      window.localStorage.setItem("lines", JSON.stringify(lines));
    }
  }, [lines]);
  useEffect(() => {
    if (circles) {
      window.localStorage.setItem("circles", JSON.stringify(circles));
    }
  }, [circles]);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    if (tool === "circle") {
      startPoint = pos;

      setCircles([
        ...circles,
        {
          tool,
          x: pos.x,
          y: pos.y,
          radius: 1,
          strokeWidth: strokeWidth,
          stroke: color,
        },
      ]);
    } else {
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (tool === "circle") {
      let lastCircle = circles[circles.length - 1];
      const newRadius =
        Math.abs(startPoint.x - point.x) + Math.abs(startPoint.y - point.y);
      lastCircle = { ...lastCircle, radius: newRadius };

      // replace last
      circles.splice(circles.length - 1, 1, lastCircle);
      setCircles(circles.concat());
    } else {
      let lastLine = lines[lines.length - 1];
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <StageWrapper shape={tool}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
          {circles.map((circle, i) => (
            <Circle
              key={i}
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
        </Layer>
      </Stage>
    </StageWrapper>
  );
};

export default CustomStage;

const StageWrapper = styled.div`
  cursor: ${(props) => props.shape && "crosshair"};
`;
