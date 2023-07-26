import "./style.css";
import MainFirstImage from "../../assets/main-first-image.jpg";
import MainSecondImage from "../../assets/main-second-image.jpg";
import MainThierdImage from "../../assets/main-third-image.jpeg";
import GradientButton from "../GradientButtonWithIcon";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmergingPart from "../EmergingPart";
import { Tooltip } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from "react";

const AboutMe = () => {
    const imageArray = [MainFirstImage, MainSecondImage, MainThierdImage];
    const [imageSetter, setImageSetter] = useState(imageArray[0]);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if(currentImage > (imageArray.length - 1)){
            setCurrentImage(0);
        }
        else if(currentImage < 0){
            setCurrentImage(imageArray.length - 1);
        }
        setImageSetter(imageArray[currentImage]);
    }, [currentImage])

    return(
        <div id="aboutMe" className="about-me__main-container">
            <div className="about-me-image__main-container">
                <Tooltip className="about-me__arrows-cantainer" title="Go left" onClick={() => setCurrentImage(currentImage - 1)}>
                    <ChevronLeftIcon sx={{color: "#dbb594", fontSize: 40}}/>
                </Tooltip>
                {imageSetter ? <img className="about-me-image__image-item" src={imageSetter} alt="Main image" /> : <></>}
                <Tooltip className="about-me__arrows-cantainer" title="Go right"  onClick={() => setCurrentImage(currentImage + 1)}>
                    <ChevronRightIcon sx={{color: "#dbb594", fontSize: 40}} />
                </Tooltip>
            </div>

            <EmergingPart />

            <div className="about-me-buttons-part__main-container">
                <div className="about-me-buttons-part__content-container">
                    <h2 className="about-me-buttons-part__main-header">On a mission to build better digital worlds XD </h2>
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