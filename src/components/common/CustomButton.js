import { Button } from "@mui/material";
import styled from "styled-components";

const CustomButton = ({ content, h, w, fs, children, ...props }) => {
  return (
    <BtnStyle>
      <Button
        variant="outlined"
        sx={{
          height: `${h ? h : "44px"}`,
          width: `${w}`,
        }}
        {...props}
      >
        {children}
        <span id="linkBtnContent" style={{ fontSize: `${fs ? fs : "14px"}` }}>
          {content}
        </span>
      </Button>
    </BtnStyle>
  );
};

export default CustomButton;

const BtnStyle = styled.div`
  border-radius: 20px;
  #linkBtnContent {
    font-family: "SCDream5";
    color: white;
  }
`;
