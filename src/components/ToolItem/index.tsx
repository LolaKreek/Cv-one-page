import { ComponentsTypes } from "../types";

//Creating one tool in the part "Tools"
//PROPS:
//wrapper       -> wrapper class name (main wrapper in this component)
//src           -> link to picture
//firstText     -> text for the first paragraph
//secondText    -> text for the second paragraph
//href          -> link to documentation page
const ToolItem = (props: ComponentsTypes.ToolsItemPropsType) => {
    return(
        <div className={'tools__container-icons ' + props.wrapper}>
            <a className="tools__icons-link" href={props.href} target="blank">
                <img alt='Tools icon' className='tools__icons' src={props.src} />
                <p className='tools__inscription'>{props.firstText}</p>
                <p className='tools__inscription'>{props.secondText}</p>
            </a>
        </div>
    )
}

export default ToolItem;