import { ComponentsTypes } from '../types';

//Creating one work block in the "Portfolio" part
//Here a part of the block is created, which appears when you hover the mouse over the block
//ARGUMENTS:
//wrapper       -> wrapper class name (main wrapper in this component)
//firstText     -> title text
//secondText    -> paragraph text
//thirdText     -> the first description text
//fourth        -> the second description text
const Work = (props: ComponentsTypes.WorkPropstype) => {
    return(
        <div className={"my-works__new-work " + props.wrapper}>
            <h2 className='my-works__main-header margin-zero main-header'>{props.firstText}</h2>
            <p className='my-works__new-paragraph'>{props.secondText}</p>
            <p className='my-works__new-description'>{props.thirdText}</p>
            <p className='my-works__new-description'>{props.fourthText}</p>
        </div>
    );
}

export default Work;