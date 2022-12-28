import styled from "styled-components";
import CustomButton from "../common/CustomButton";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { ToolContext } from "../../hooks/useToolContext";
import { SketchPicker } from "react-color";

const Nav = () => {
  const { setTool, strokeWidth, setStrokeWidth, color, setColor } =
    useContext(ToolContext);
  return (
    <StyledWrapper>
      <div className="shape-button-container">
        <CustomButton onClick={() => setTool("line")}>
          <HorizontalRuleIcon />
        </CustomButton>
      </div>
      <div className="shape-button-container">
        <CustomButton onClick={() => setTool("curve")}>
          <img
            src="https://www.nicepng.com/png/detail/26-268595_vector-line-curve-svg-png-icon-free-download.png"
            alt="Vector Line Curve Svg Png Icon Free Download - Curve Icon Png@nicepng.com"
            style={{ width: "30px" }}
          />
        </CustomButton>
      </div>
      <div className="shape-button-container">
        <CustomButton onClick={() => setTool("circle")}>
          <PanoramaFishEyeIcon />
        </CustomButton>
      </div>
      <div className="shape-button-container">
        <CustomButton onClick={() => setTool("rectangle")}>
          <RectangleIcon />
        </CustomButton>
      </div>
      <div className="shape-button-container">
        <CustomButton onClick={() => setTool("polygon")}>
          <PanoramaFishEyeIcon />
        </CustomButton>
      </div>
      <div className="shape-button-container">
        <TextField
          type="number"
          name="share"
          label="Share"
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
      <div className="shape-button-container sketch-picker">
        <SketchPicker
          color={color}
          onChangeComplete={(color, e) => {
            setColor(color.hex);
          }}
        />
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
  .shape-button-container {
    margin: 10px;
  }
  .sketch-picker {
    z-index: 1;
    position: absolute;
    top: 30px;
  }
`;
