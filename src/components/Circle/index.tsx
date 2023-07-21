import { ComponentsTypes } from '../types';

//Creating graphic images of circles
//ARGUMENTS:
//class     -> class name (for main div in this component)
//src       -> link to picture
const Circle = (props:ComponentsTypes.CirclePropsType) => {
    return(
        <div className={props.class}>
            <img alt='Circle' className={props.classImg} src={props.src} />
        </div>
    );
}

export default Circle;