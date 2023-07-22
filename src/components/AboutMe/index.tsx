import "./style.css";
import mainImage from "../../assets/mainImage.jpg"
import GradientButton from "../GradientButtonWithIcon";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmergingPart from "../EmergingPart";

const AboutMe = () => {
    return(
        <div className="about-me__main-container">
            <div className="about-me-image__main-container">
                <img className="about-me-image__image-item" src={mainImage} alt="Main image" />
            </div>

            <EmergingPart />

            <div className="about-me-buttons-part__main-container">
                <div className="about-me-buttons-part__content-container">
                    <h2 className="about-me-buttons-part__main-header">//I am a freelancer</h2>
                    <p className="about-me-buttons-part__text">Contact me if you want to work with me</p>

                    <div className="buttons-part-content__buttons-container">
                        <GradientButton icon={<EngineeringIcon />} title="Hire me now" />
                        <GradientButton icon={<ArrowCircleDownIcon />} title="Download CV" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;