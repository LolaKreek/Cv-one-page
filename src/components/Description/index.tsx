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
                    <h2 className="second-header">Work Experience</h2>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">2017 - 2018</p>
                        <p className="secondary-school-container__school-text margin-zero">Sushi Bar in Siedlce, waitress</p>
                    </div>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">2018 - 2019</p>
                        <p className="secondary-school-container__school-text margin-zero">Printing House "Iwonex", assistant</p>
                    </div>
                    <p className="standard-color-and-font description-text">I decided to add job experiences that are not related to my specialty to show that 
                    I am a person who can work long and hard :)</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">03/2020 - 06/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">The course "Internet Content Accessibility Tester"</p>
                    </div>
                    <p className="standard-color-and-font description-text">The next thing that happened to me was my first practice where 
                    my task was "Make a website with a database on the subject of "Project Tracking System" (Used HTML, CSS, JS, jQuery, PHP and SQL).</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">07/2020 - 08/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">Internship at the University of Natural Sciences and Humanities in Siedlce</p>
                    </div>
                    <p className="standard-color-and-font description-text">The next course I took will help me to get a job in Poland and get a good practice in Germany in the future.</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">04/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">The course "Dev Hero: Remote course Front End"</p>
                    </div>
                    <p className="standard-color-and-font description-text">It was my first internship at the firm, I learned a lot in these three months :)</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">07/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">Practice in a private company in Siedlce, working on commercial 
                        projects as a Junior Front-End Developer</p>
                    </div>
                    <p className="standard-color-and-font description-text">During almost all my studies, I constantly worked part-time somewhere, 
                        because I lived on my own.</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">01/2019 - 03/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">RGIS, inventory worker in the retail area</p>
                    </div>
                    <p className="standard-color-and-font description-text">The next practice was not limited by time frames (for example, 320 hours), 
                        I worked for the company until I did the tasks indicated at the very beginning.</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">06/2022 - 10/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">Practice at the private company "meetingmasters.de e.K." 
                        in Germany, Trier, working on commercial projects as Junior Front-End Developer</p>
                    </div>
                    <p id="skills" className="standard-color-and-font description-text">At the next company, I worked remotely. At first I worked part-time, 
                        and then I started working full-time.</p>
                    <div className="description__secondary-school-container">
                        <p className="secondary-school-container__years-text margin-zero">03/2022 - 04/2023</p>
                        <p className="secondary-school-container__school-text margin-zero">Blunovation Sp. z o.o, Junior front-end developer</p>
                    </div>
                </div>

                <div className="description__ability-wrapper" ref={skillsRef}>
                    <h2 className="main-header">//Skills</h2>
                    <p className="standard-color-and-font description-text">Below are the skills I possess, along with a brief 
                    description of my proficiency level in each:</p>

                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='HTML 100%' tooltipTitle="Highly skilled in HTML" />
                        : <Skills class='column-10 column' text='HTML 100%' tooltipTitle="Highly skilled in HTML" />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='CSS 100%' tooltipTitle="The confident and capable coder" />
                        : <Skills class='column-10 column' text='CSS 100%' tooltipTitle="The confident and capable coder" />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-10 column column-animation' text='JS 100%' tooltipTitle="Confident in JavaScript" />
                        : <Skills class='column-10 column' text='JS 100%' tooltipTitle="Confident in JavaScript" />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-8 column column-animation' text='TypeScript 80%' tooltipTitle="80% knowledgeable programmer XD" />
                        : <Skills class='column-8 column' text='TypeScript 80%' tooltipTitle="80% knowledgeable programmer XD" />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-7 column column-animation' text='ReactJS 70%' tooltipTitle="Aspiring to the heights ;)" />
                        : <Skills class='column-7 column' text='ReactJS 70%' tooltipTitle="Aspiring to the heights ;)" />}
                    </div>
                    <div className="skills__container-ability">
                        {showSkills ? <Skills class='column-9 column column-animation' text='Scss 90%' tooltipTitle="Skillful in SCSS" />
                        : <Skills class='column-9 column' text='Scss 90%' tooltipTitle="Skillful in SCSS" />}
                    </div>
                </div>
                <p className="standard-color-and-font description-text">Below you can find the tools and libraries that I managed to work with ;)</p>
            </div>
        </div>
    )
}

export default Description;