import { ComponentsTypes } from "../types";

const ToolItem = (props: ComponentsTypes.ToolsItemPropsType) => {
    return(
        <div className={'tools__container-icons ' + props.wrapper}>
            <a href={props.href} target="blank">
                <img alt='Tools icon' className='tools__icons' src={props.src} />
                <p className='tools__inscription'>{props.firstText}</p>
                <p className='tools__inscription'>{props.secondText}</p>
            </a>
        </div>
    )
}

export default ToolItem;