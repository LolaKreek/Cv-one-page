import { Box, Typography } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BlindIcon from '@mui/icons-material/Blind';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VideocamIcon from '@mui/icons-material/Videocam';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ExchangeStudent from "../../assets/exchange-student.png";
import FrontEnd from '../../assets/front-end.png';
import Practice from '../../assets/practice.png';
import Skills from "../Skills";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

//Creating a part "Description" (description of my educational process and work experience)
const Description = () => {
    const skillsRef = useRef(null);
    const [showSkills, setShowSkills] = useState(false);
    const {t} = useTranslation();

    //Tracking the user's position on the page, when adding animation, removing the scrolling event
    const scrollHandle = () => {
        if(showSkills == false){
            if(skillsRef.current){
                const {offsetTop} = skillsRef.current
                const position = window.scrollY;

                if((offsetTop - position) < 600 ){
                    setShowSkills(true);
                    window.removeEventListener('scroll', scrollHandle);
                }
            }
            
        }
    }

    //Adding a scrolling event to a window
    useEffect(() => {
        window.addEventListener('scroll', scrollHandle);
    }, [])

    return(
        <div id="aboutMe" className="description">
            <div className="description__my-life-wrapper">
                <div>
                    <h2 className="main-header">{t('descriptionAboutMeHeader')}</h2>
                    <h2 className="second-header">{t('descriptionAboutMeSecondHeader')}</h2>

                    <p className="standard-color-and-font description-text">{t('descriptionFirstParagraph')}</p>

                    <p className="standard-color-and-font description-text">{t('descriptionSecondParagraph')}</p>

                    <p className="standard-color-and-font description-text">{t('descriptionThirdParagraph')}</p>

                    <p className="standard-color-and-font description-text">{t('descriptionFourthParagraph')}</p>
                </div>

                <div>
                    <h2 className="second-header margin-top-4-per">{t('descriptionMyInterests')}</h2>
                    <p className="standard-color-and-font description-text">{t('descroptionListIntroduction')}</p>

                    <Box className="description__list" sx={{ display: 'flex', alignItems: 'start', textAlign: 'start', flexDirection: 'column', margin: '1% 0 0 10%' }}>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <TravelExploreIcon />
                            <span className="list__span">{t('descroptionListTravelCulturalExploration')}</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <FitnessCenterIcon />
                            <span className="list__span">{t('descriptionListFitness')}</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <AutoStoriesIcon />
                            <span className="list__span">{t('descriptionListReading')}</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <VideocamIcon />
                            <span className="list__span">{t('descriptionListPhotoVideo')}</span>
                        </Typography>
                    </Box>
                </div>

                <div className="description__education-container">
                    <h2 className="second-header margin-top-4-per">{t('descriptionEducation')}</h2>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationFirstParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <HistoryEduIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">2006 - 2017</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationSchool')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationSecondParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <SchoolIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">2019 - now</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationUniversity')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationThirdParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <BlindIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">03/2020 - 06/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationTesterCourse')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationFourthParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={FrontEnd} width={23}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">04/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationReactCourse')}</p>
                    </div> 
                    <p className="standard-color-and-font description-text">{t('descriptionEducationFifthParagraph')}</p>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationSixthParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={ExchangeStudent} width={23}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">04/2022 - 08/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationGermany')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationSeventhParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={Practice} width={25}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">06/2022 - 10/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('descriptionEducationPractice')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('descriptionEducationEighthParagraph')}</p>
                </div>
            </div>

            <div className="description__skills-wrapper">
                <div className="skills__work-experience">
                    <h2 className="second-header">{t('workExperience')}</h2>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">2017 - 2020</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceSushiBar')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceFirstParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">03/2020 - 06/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceTester')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceSecondParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">07/2020 - 08/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceUniversityInternship')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceThirdParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">04/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceReactCourse')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceFourthParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">07/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperiencePrivatePractice')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceFifthParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">01/2019 - 03/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceRgis')}</p>
                    </div>
                    <p className="standard-color-and-font description-text">{t('workExperienceSixthParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">06/2022 - 10/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceGermanyPractice')}</p>
                    </div>
                    <p id="skills" className="standard-color-and-font description-text">{t('workExperienceSeventhParagraph')}</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">03/2022 - 04/2023</p>
                        <p className="secondary-school-container__school-text margin-zero">{t('workExperienceBlunovation')}</p>
                    </div>
                </div>

                <div className="description__ability-wrapper" ref={skillsRef}>
                    <h2 className="main-header">{t('skills')}</h2>
                    <p className="standard-color-and-font description-text">{t('skillsFirstParagraph')}</p>

                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='HTML 100%' tooltipTitle={t('skillsToolTipHtml')} />
                        : <Skills class='column-10 column' text='HTML 100%' tooltipTitle={t('skillsToolTipHtml')} />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='CSS 100%' tooltipTitle={t('skillToolTipCss')} />
                        : <Skills class='column-10 column' text='CSS 100%' tooltipTitle={t('skillToolTipCss')} />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='JS 100%' tooltipTitle={t('skillToolTipJs')} />
                        : <Skills class='column-10 column' text='JS 100%' tooltipTitle={t('skillToolTipJs')} />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-8 column column-animation' text='TypeScript 80%' tooltipTitle={t('skillToolTipTs')} />
                        : <Skills class='column-8 column' text='TypeScript 80%' tooltipTitle={t('skillToolTipTs')} />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-7 column column-animation' text='ReactJS 70%' tooltipTitle={t('skillToolTipReact')} />
                        : <Skills class='column-7 column' text='ReactJS 70%' tooltipTitle={t('skillToolTipReact')} />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-9 column column-animation' text='Scss 90%' tooltipTitle={t('skillToolTipScss')} />
                        : <Skills class='column-9 column' text='Scss 90%' tooltipTitle={t('skillToolTipScss')} />}
                    </div>
                </div>
                <p className="standard-color-and-font description-text">{t('skillsSecondParagraph')}</p>
            </div>
        </div>
    )
}

export default Description;