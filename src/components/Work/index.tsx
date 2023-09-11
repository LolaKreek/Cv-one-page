import { ComponentsTypes } from "../types";

//Creating one work block in the "My work/Portfolio" part
//Here a part of the block is created, which appears when you hover the mouse over the block
//PROPS:
//wrapper       -> wrapper class name (main wrapper in this component)
//firstText     -> title text
//secondText    -> paragraph text
//thirdText     -> the first description text
//fourth        -> the second description text
//link          -> link to the Netlify platform where you can watch the project
const Work = (props: ComponentsTypes.WorkPropstype) => {
    return(
            <div className={"my-works__new-work " + props.wrapper}>
                {props.link ? <a href={props.link} target="_blank">
                    <div className="my-works__content-container">
                        <h2 className='main-header main-header__for-my-work'>{props.firstText}</h2>
                        <p className='my-works__new-paragraph'>{props.secondText}</p>
                        <p className='my-works__new-description'>{props.thirdText}</p>
                        <p className='my-works__new-description'>{props.fourthText}</p>
                    </div>
                </a> : <div className="my-works__content-container">
                        <h2 className='main-header main-header__for-my-work'>{props.firstText}</h2>
                        <p className='my-works__new-paragraph'>{props.secondText}</p>
                        <p className='my-works__new-description'>{props.thirdText}</p>
                        <p className='my-works__new-description'>{props.fourthText}</p>
                    </div>}
            </div>
    );
}

export default Work;