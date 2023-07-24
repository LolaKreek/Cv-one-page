import { WorkPropstype } from "./types";
import "./style.css"

const Work = (props: WorkPropstype) => {
    return(
        <div className={"my-works__new-work " + props.wrapper}>
            <h2 className='my-works__main-header margin-zero main-header__for-my-work'>{props.firstText}</h2>
            <p className='my-works__new-paragraph'>{props.secondText}</p>
            <p className='my-works__new-description'>{props.thirdText}</p>
            <p className='my-works__new-description'>{props.fourthText}</p>
        </div>
    );
}

export default Work;