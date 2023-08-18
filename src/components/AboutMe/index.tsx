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
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png";
import Circle_02 from "../../assets/circle_02.png";
import PfdFile from "../../data/lalita-klimchuk.pdf";

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

    async function cvDownloadHandle() {
        fetch(PfdFile, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/pdf',
            },
        })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
            new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
            'download',
            `Lalita-Klimchuk-CV.pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);
            // Start download
            link.click();
            // Clean up and remove the link
            link.remove();
        });
    }

    return(
        <div className="about-me">
            <div className="about-me__image-main-container">
                <Circles class="image-main-container__container-about-me-circle-2 circle" classImg="image-main-container__about-me-circle-2" src={Circle_02} />
                <Tooltip className="image-main-container__arrows-cantainer" title="Go left" onClick={() => setCurrentImage(currentImage - 1)}>
                    <ChevronLeftIcon sx={{color: "#dbb594", fontSize: 40}}/>
                </Tooltip>
                {imageSetter ? <img className="about-me__main-image-item" src={imageSetter} alt="Main image" /> : <></>}
                <Tooltip className="image-main-container__arrows-cantainer" title="Go right"  onClick={() => setCurrentImage(currentImage + 1)}>
                    <ChevronRightIcon sx={{color: "#dbb594", fontSize: 40}} />
                </Tooltip>
            </div>

            <Circles class="about-me__container-circle-3" classImg="about-me__circle-3 circle" src={Circle_01} />
            <Circles class="about-me__container-circle-1" classImg="about-me__circle-1 circle" src={Circle_01} />
            <EmergingPart />

            <div className="about-me-buttons-part__main-container">
                <div className="about-me-buttons-part__content-container">
                    <h2 className="about-me-buttons-part__main-header">On a mission to build better digital worlds XD </h2>
                    <p className="about-me-buttons-part__text">Contact me if you want to work with me</p>

                    <div className="buttons-part-content__buttons-container">
                        <a className="menu-content__links" href="#contactMe"><GradientButton icon={<EngineeringIcon />} title="Hire me now" /></a>
                        <div onClick={cvDownloadHandle}><GradientButton icon={<ArrowCircleDownIcon />} title="Download CV" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;