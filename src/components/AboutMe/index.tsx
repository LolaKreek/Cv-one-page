import MainFirstImage from "../../assets/main-first-image.jpg";
import MainSecondImage from "../../assets/main-second-image.jpg";
import MainThierdImage from "../../assets/main-third-image.jpg";
import GradientButton from "../GradientButtonWithIcon";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmergingPart from "../EmergingPart";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png";
import Circle_02 from "../../assets/circle_02.png";
import PfdFile from "../../data/lalita-klimchuk.pdf";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

//Creating a part "About Me"
const AboutMe = () => {
    //Import of required icons
    const imageArray = [MainFirstImage, MainSecondImage, MainThierdImage];
    //UseState contains the index of the current image
    const [currentImage, setCurrentImage] = useState(0);
    const mainImageRef = useRef<any>(null);
    const {t} = useTranslation();

    useEffect(() => {
        const imageElement = mainImageRef.current;
        if(imageElement){
            mainImageRef.current.src = imageArray[currentImage];
            imageElement.style.animation = 'none';
            imageElement.offsetHeight; // trigger reflow for main image
            imageElement.style.animation = null;
        }
    }, [currentImage])

    //Logic for downloading a resume from a page
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

                {currentImage > 0 ? <Tooltip className="image-main-container__arrows-cantainer" title={t('toolTipGoLeft')} onClick={() => setCurrentImage(currentImage - 1)}>
                    <ChevronLeftIcon sx={{color: "#dbb594", fontSize: 40}}/>
                </Tooltip> : 
                <Tooltip className="image-main-container__arrows-cantainer" title={t('toolTipSwipeRight')}>
                    <ChevronLeftIcon sx={{color: "#aaa", fontSize: 40}}/>
                </Tooltip>}

                <img ref={mainImageRef} className='about-me__main-image-item' src='' alt="Main image" />

                {currentImage < 2 ? <Tooltip className="image-main-container__arrows-cantainer" title={t('toolTipGoRight')} onClick={() => setCurrentImage(currentImage + 1)}>
                    <ChevronRightIcon sx={{color: "#dbb594", fontSize: 40}} />
                </Tooltip> : 
                <Tooltip className="image-main-container__arrows-cantainer" title={t('toolTipSwipeLeft')}>
                    <ChevronRightIcon sx={{color: "#aaa", fontSize: 40}} />
                </Tooltip>
                }
            </div>

            <Circles class="about-me__container-circle-3" classImg="about-me__circle-3 circle" src={Circle_01} />
            <Circles class="about-me__container-circle-1" classImg="about-me__circle-1 circle" src={Circle_01} />
            <EmergingPart />

            <div className="about-me-buttons-part__main-container">
                <div className="about-me-buttons-part__content-container">
                    <h2 className="about-me-buttons-part__main-header">{t('aboutMeButtonsPartMainHeader')}</h2>
                    <p className="about-me-buttons-part__text">{t('aboutMeContactMe')}</p>
                    <p className="about-me-buttons-part__text">lalitaklimchuk@gmail.com</p>
                    <p className="about-me-buttons-part__text">+48 722 169 993</p>
                    <p className="about-me-buttons-part__text">CV: https://lalita-klimchuk.netlify.app</p>

                    <div className="buttons-part-content__buttons-container">
                        <a className="menu-content__links" href="#contactMe"><GradientButton icon={<EngineeringIcon />} title={t('aboutMeButtonHireMe')} /></a>
                        <div onClick={cvDownloadHandle}><GradientButton icon={<ArrowCircleDownIcon />} title={t('aboutMeButtonDownloadCV')} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;