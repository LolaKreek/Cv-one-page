import { ComponentsTypes } from "../types";

//Adding graphic images of circles
//PROPS:
//class     -> class name (for main div in this component)
//classImg  -> class name (for img element)
//src       -> link to picture
const Circles = (props: ComponentsTypes.CirclePropsType) => {
    return(
        <div className={props.class}>
            <img alt='Circle' className={props.classImg} src={props.src} />
        </div>
    )
}

export default Circles;