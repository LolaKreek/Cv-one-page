import { ComponentsTypes } from "../types";

const Skills = (props: ComponentsTypes.SkillsPropsType) => {
    return(
        <div className={props.class}>
            <p>{props.text}</p>
        </div>
    );
}

export default Skills;