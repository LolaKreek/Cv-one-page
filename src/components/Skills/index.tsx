import { SkillsTypes } from "./type";

const Skills = (props: SkillsTypes.SkillsPropsType) => {
    return(
        <div className={props.class}>
            <p>{props.text}</p>
        </div>
    );
}

export default Skills;