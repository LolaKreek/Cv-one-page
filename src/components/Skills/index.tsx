import { Tooltip } from "@mui/material";
import { ComponentsTypes } from "../types";

const Skills = (props: ComponentsTypes.SkillsPropsType) => {
    return(
        <Tooltip title={props.tooltipTitle}>
            <div className={props.class}>
                <p>{props.text}</p>
            </div>
        </Tooltip>
    );
}

export default Skills;