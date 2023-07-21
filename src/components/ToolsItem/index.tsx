//Creating one tool for a block "Tools"
//ARGUMENTS:
//wrapper       -> wrapper class name (main wrapper in this component)
//src           -> link to picture
//firstText     -> text for the first paragraph

import { ComponentsTypes } from "../types";

//secondText    -> text for the second paragraph
const ToolsItem = (props: ComponentsTypes.ToolsItemPropsType) => {
    return(
        <div className={'tools__container-icons ' + props.wrapper}>
            <img alt='Tools icon' className='tools__icons' src={props.src} />
            <p className='tools__inscription'>{props.firstText}</p>
            <p className='tools__inscription'>{props.secondText}</p>
        </div>
    );
}

export default ToolsItem