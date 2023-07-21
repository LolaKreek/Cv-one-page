//Creating one skill in the block "About Me" -> "Skills"
//ARGUMENTS:
//class -> class name
import { ComponentsTypes } from "../types";

//text  -> text in the skill
const Skills = (props: ComponentsTypes.SkillsPropsType) => {
    return(
        <div className={props.class}>
            <p>{props.text}</p>
        </div>
    );
}

export default Skills;