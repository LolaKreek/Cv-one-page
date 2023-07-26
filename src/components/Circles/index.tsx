import { ComponentsTypes } from "../types";

const Circles = (props: ComponentsTypes.CirclePropsType) => {
    return(
        <div className={props.class}>
            <img alt='Circle' className={props.classImg} src={props.src} />
        </div>
    )
}

export default Circles;