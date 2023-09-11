import { Tooltip } from "@mui/material";
import { ComponentsTypes } from "../types";

//Creating one skill in the part "Description" -> "Skills"
//PROPS:
//class         -> class name for the skill container
//text          -> skill name
//tooltipTitle  -> tooltip text
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