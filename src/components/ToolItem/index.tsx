import { ComponentsTypes } from "../types";

const ToolItem = (props: ComponentsTypes.ToolsItemPropsType) => {
    return(
        <div className={'tools__container-icons ' + props.wrapper}>
            <img alt='Tools icon' className='tools__icons' src={props.src} />
            <p className='tools__inscription'>{props.firstText}</p>
            <p className='tools__inscription'>{props.secondText}</p>
        </div>
    )
}

export default ToolItem;