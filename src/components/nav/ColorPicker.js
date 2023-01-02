import { useContext, useState } from "react";
import { SketchPicker } from "react-color";
import { ToolContext } from "../../hooks/useToolContext";
import styled from "styled-components";

const ColorPicker = () => {
  const { color, setColor } = useContext(ToolContext);
  const [displayColorPicker, setDispalyColorPicker] = useState(false);

  const handleClick = () => {
    setDispalyColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDispalyColorPicker(false);
  };

  return (
    <StyledWrapper hexColor={color}>
      <div id="swatch" onClick={handleClick}>
        <div id="color" />
      </div>
      {displayColorPicker && (
        <div id="popover">
          <div id="cover" onClick={handleClose} />
          <SketchPicker
            color={color}
            onChange={(color, e) => {
              setColor(color.hex);
            }}
          />
        </div>
      )}
    </StyledWrapper>
  );
};

export default ColorPicker;

const StyledWrapper = styled.div`
  #color {
    width: 36px;
    height: 14px;
    borderradius: 2px;
    background: ${(props) => props.hexColor};
  }
  #swatch {
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
    display: inline-block;
    cursor: pointer;
  }
  #popover {
    position: absolute;
    z-index: 2;
  }
  #cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;
