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

//Creating a part "Description" (description of my educational process and work experience)
const Description = () => {
    const skillsRef = useRef(null);
    const [showSkills, setShowSkills] = useState(false);

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
                    <h2 className="main-header">//About me</h2>
                    <h2 className="second-header">All about my life</h2>

                    <p className="standard-color-and-font description-text">I can talk about my life for a long time. At my age, I have a little 
                        experience that I could share.</p>

                    <p className="standard-color-and-font description-text">If life were a colorful tapestry, 
                    mine would be a vibrant mosaic, woven with diverse experiences and cherished moments. 
                    As an active and sociable individual, I relish every beat of life's rhythm, seeking to 
                    add value to each precious moment. </p>

                    <p className="standard-color-and-font description-text">Fuelled by a profound passion for programming, 
                    I have embraced my current role with fervor, and my aspiration is to become an outstanding 
                    programmer with an in-depth understanding of my craft. </p>

                    <p className="standard-color-and-font description-text">Looking ahead, my vision is one of perpetual 
                    growth, where I am determined to continually sharpen my skills and expand my knowledge. For me, 
                    the future is an exhilarating journey of intellectual enrichment and becoming a true coding 
                    maestro XD.</p>
                </div>

                <div>
                    <h2 className="second-header margin-top-4-per">My interests</h2>
                    <p className="standard-color-and-font description-text">Speaking of my interests, they may not be numerous, but they are carefully chosen to ensure 
                        a fulfilling and enriching holiday for both my physical well-being and mental growth. Here's 
                        a glimpse into the facets that make my leisure time truly worthwhile:</p>

                    <Box className="description__list" sx={{ display: 'flex', alignItems: 'start', textAlign: 'start', flexDirection: 'column', margin: '1% 0 0 10%' }}>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <TravelExploreIcon />
                            <span className="list__span">Travel and cultural exploration</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <FitnessCenterIcon />
                            <span className="list__span">Fitness classes</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <AutoStoriesIcon />
                            <span className="list__span">Reading</span>
                        </Typography>
                        <Typography className="list__item" sx={{ minWidth: 150 }}>
                            <VideocamIcon />
                            <span className="list__span">Photo and video shooting</span>
                        </Typography>
                    </Box>
                </div>

                <div className="description__education-container">
                    <h2 className="second-header margin-top-4-per">Education</h2>
                    <p className="standard-color-and-font description-text">Until the age of 17, I lived in Belarus, so I received my secondary 
                        general education there.</p>
                    <div className="description__secondary-school-container">
                        <HistoryEduIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">2006 - 2017</p>
                        <p className="secondary-school-container__school-text margin-zero">Secondary school in Brest, Belarus</p>
                    </div>
                    <p className="standard-color-and-font description-text">At the university, I'm studing a little longer than expected due to 
                    personal circumstances. I'm studing at the computer science faculty.</p>
                    <div className="description__secondary-school-container">
                        <SchoolIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">2019 - now</p>
                        <p className="secondary-school-container__school-text margin-zero">Siedlce University of Natural Sciences and Humanities</p>
                    </div>
                    <p className="standard-color-and-font description-text">While studying at the university, I had the opportunity to take a free course "Information technology supporting people 
                        with visual impairment", which was organized by the university.</p>
                    <div className="description__secondary-school-container">
                        <BlindIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text margin-zero">03/2020 - 06/2020</p>
                        <p className="secondary-school-container__school-text margin-zero">The course "Internet Content Accessibility Tester"</p>
                    </div>
                    <p className="standard-color-and-font description-text">A year later, I realized that the university does not provide enough narrow knowledge to be able to get a job in the 
                        future, so I bought courses in ReactJS. But during this course, I also greatly improved my knowledge in js, 
                        css and scss.</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={FrontEnd} width={23}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">04/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text margin-zero">The course "Dev Hero: Remote course Front End"</p>
                    </div> 
                    <p className="standard-color-and-font description-text">A couple of months later completing these courses, I was able to get a job :)</p>
                    <p className="standard-color-and-font description-text">After I got a remote job, I went to Germany for one semester as an exchange student to study. I studied in the 
                    city of Trier at the Faculty of Computer Science.</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={ExchangeStudent} width={23}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">04/2022 - 08/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">Hochschule Trier – Trier University of Applied Sciences</p>
                    </div>
                    <p className="standard-color-and-font description-text">Also, while studying in Germany, I managed to do an internship in a private company in Trier.</p>
                    <div className="description__secondary-school-container">
                        <div className="secondary-school-container__icon">
                            <img src={Practice} width={25}/>
                        </div>
                        <p className="secondary-school-container__years-text margin-zero">06/2022 - 10/2022</p>
                        <p className="secondary-school-container__school-text margin-zero">Practice at the firm meetingmasters.de e.K.</p>
                    </div>
                    <p className="standard-color-and-font description-text">I had to do part of the practice work remotely, as my German visa was expiring ;)</p>
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