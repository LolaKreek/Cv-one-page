import { ComponentsTypes } from "../types";

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