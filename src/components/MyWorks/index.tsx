import { useState } from "react";
import Work from "../Work";
import Map from '../../assets/project-map.png';
import Genshin from '../../assets/project-genshin.png';
import UnderConstruction from '../../assets/under-construction.png';
import PortfolioIcons from "../PortfolioIcons";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png"
import { useTranslation } from "react-i18next";

//Creating a part "My works/Portfolio"
const MyWorks = () => {
    const [firstWork, setFirstWork] = useState(false);
    const [secondWork, setSecondWork] = useState(false);
    const [thirdWork, setThirdWork] = useState(false);
    const {t} = useTranslation();

    return(
        <div className="my-works">
            <h2 className="main-header">{t('works')}</h2>
            <h2 className="second-header">{t('worksPortfolio')}</h2>

            <p className="standard-color-and-font my-works__text">{t('worksFirstParagraph')}</p>

            <div className="my-works__container-works">
                <Circles class="my-works__container-circle-1 circle" classImg="circle-1" src={Circle_01} />

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setFirstWork(true)} onMouseLeave={() => setFirstWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {firstWork ? <Work wrapper='show-wrapper'
                            link="https://map-d3js-lalita-klimchuk.netlify.app"
                            firstText={t('worksFirstHeader')} 
                            secondText={t('worksFirstDescription')}
                            thirdText={t('worksFirstSkills')} fourthText={t('worksFirstTools')}/> : <></>}
                        <img className="my-work__main-image" alt='Visualization of map project' id="img-1" src={Map} />
                    </div>
                    
                    {/* <PortfolioIcons href="https://github.com/LolaKreek/Map-with-d3.js" showWebsite='https://map-d3js-lalita-klimchuk.netlify.app' /> */}
                    <PortfolioIcons href="https://github.com/LolaKreek/Map-with-d3.js" />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setSecondWork(true)} onMouseLeave={() => setSecondWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {secondWork ? <Work wrapper='show-wrapper' 
                            link="https://genshin-impact-lalita-klimchuk.netlify.app" 
                            firstText={t('worksSecondHeader')} 
                            secondText={t('worksSecondDescription')} 
                            thirdText={t('worksSecondSkills')} fourthText={t('worksSecondTools')}/> : <></>}
                        <img className="my-work__main-image" alt='Visualization of Genshin project' id="img-2" src={Genshin} />
                    </div>

                    <PortfolioIcons href="https://github.com/LolaKreek/GenshinForum" showWebsite="https://genshin-impact-lalita-klimchuk.netlify.app" />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setThirdWork(true)} onMouseLeave={() => setThirdWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {thirdWork ? <Work wrapper='show-wrapper' firstText={t('worksThirdHeader')} secondText={t('worksThirdDescription')} thirdText={t('worksThirdSkills')} fourthText={t('worksThirdTools')} /> : <></>}
                        <img className="my-work__main-image" alt='Visualization of Graduate project' id="img-3" src={UnderConstruction} />
                    </div>

                    <PortfolioIcons href="https://github.com/LolaKreek/menu" />
                </div>
            </div>
        </div>
    )
}

export default MyWorks;