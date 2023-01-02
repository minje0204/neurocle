import { useContext, useRef } from "react";
import { Stage } from "react-konva";
import styled from "styled-components";
import { HistoryContext } from "../../hooks/useHistoryContext";
import { ShapeContext } from "../../hooks/useShapes";
import { ToolContext } from "../../hooks/useToolContext";
import CustomLayer from "./CustomLayer";

const CustomStage = () => {
  const { shapeType } = useContext(ToolContext);
  const { addHistory } = useContext(HistoryContext);
  const { shapes, makeNewShape, handleShapeDrawing, lastModifiedShape } =
    useContext(ShapeContext);

  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    makeNewShape(pos);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    handleShapeDrawing(point);
  };

  const handleMouseUp = () => {
    addHistory(lastModifiedShape);
    isDrawing.current = false;
  };

  return (
    <StageWrapper shape={shapeType}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <CustomLayer shapes={shapes} />
      </Stage>
    </StageWrapper>
  );
};

export default CustomStage;

const StageWrapper = styled.div`
  cursor: ${(props) => props.shape && "crosshair"};
`;
