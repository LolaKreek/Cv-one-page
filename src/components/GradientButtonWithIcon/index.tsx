import { Button, Tooltip, styled } from "@mui/material";
import { ComponentsTypes } from "./types";
import "./style.css";

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #f8cda7 30%, #dbb594 90%);
  border-radius: 8px;
  border: 0;
  color: white;
  height: 40px;
  padding: 10px 20px;
  box-shadow: 0 3px 5px 2px #aaaaaa;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;

  &:hover {
    box-shadow: 0 6px 10px 4px rgba(33, 150, 243, 0.3);
  }
`;

const GradientButtonWithIcon = ({icon, title}: ComponentsTypes.GradientButtonPropsType) => {
    return(
      <GradientButton className="gradient-button__button-item" variant="contained">
        <p>{title}</p>
        <Tooltip title={title}>
          {icon}
        </Tooltip>
      </GradientButton>
    )
}

export default GradientButtonWithIcon;