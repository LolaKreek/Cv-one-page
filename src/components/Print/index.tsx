//Component for text output
//ARGUMENTS: 
//component -> component name (ex. p, h2, span, etc.) 
//class     -> class name

import { ComponentsTypes } from "../types";

//text      -> text in the component
const Print = (props: ComponentsTypes.PrintPropsType) => {
    return <props.component className={props.class}>{props.text}</props.component>
}

export default Print;