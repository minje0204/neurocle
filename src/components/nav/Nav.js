import styled from "styled-components";
import CustomButton from "../common/CustomButton";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import RectangleIcon from "@mui/icons-material/Rectangle";
import PentagonIcon from "@mui/icons-material/Pentagon";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { ToolContext } from "../../hooks/useToolContext";
import ColorPicker from "./ColorPicker";
import { HistoryContext } from "../../hooks/useHistoryContext";

const Nav = () => {
  const {
    setShapeType,
    strokeWidth,
    setStrokeWidth,
    polygonSides,
    setPolygonSides,
  } = useContext(ToolContext);
  const { handleUndo, handleRedo } = useContext(HistoryContext);
  return (
    <StyledWrapper>
      <div className="tool-button-container">
        <CustomButton onClick={() => setShapeType("lines")}>
          <HorizontalRuleIcon />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => setShapeType("curves")}>
          <img
            src="https://www.nicepng.com/png/detail/26-268595_vector-line-curve-svg-png-icon-free-download.png"
            alt="Vector Line Curve Svg Png Icon Free Download - Curve Icon Png@nicepng.com"
            style={{ width: "30px" }}
          />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => setShapeType("circles")}>
          <PanoramaFishEyeIcon />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => setShapeType("rectangles")}>
          <RectangleIcon />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => setShapeType("polygons")}>
          <PentagonIcon />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <TextField
          type="number"
          name="다각형 꼭짓점"
          label="다각형 꼭짓점"
          style={{ width: "100px" }}
          variant="filled"
          value={polygonSides}
          onChange={(e) => setPolygonSides(Number(e.target.value))}
          InputProps={{
            inputProps: {
              max: 20,
              min: 5,
            },
          }}
        />
      </div>
      <div className="tool-button-container">
        <TextField
          type="number"
          name="두께"
          label="두께"
          variant="filled"
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(Number(e.target.value))}
          InputProps={{
            inputProps: {
              max: 50,
              min: 5,
            },
          }}
        />
      </div>
      <div className="tool-button-container">
        <ColorPicker />
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => handleUndo()}>
          <UndoIcon />
        </CustomButton>
      </div>
      <div className="tool-button-container">
        <CustomButton onClick={() => handleRedo()}>
          <RedoIcon />
        </CustomButton>
      </div>
    </StyledWrapper>
  );
};

export default Nav;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px black;
  height: 50px;
  width: 100%;
  .tool-button-container {
    margin: 10px;
  }
`;
