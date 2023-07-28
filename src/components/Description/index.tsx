import { Box, Typography } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BlindIcon from '@mui/icons-material/Blind';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VideocamIcon from '@mui/icons-material/Videocam';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./style.css"
import Skills from "../Skills";

const Description = () => {
    return(
        <div id="skills" className="description__main-container">
            <div className="description-about-me__main-container">
                <div className="description-about-me__content-container">
                    <h2 className="description-about-me__main-header">//About me</h2>
                    <h2 className="description-about-me__second-header">All about my life</h2>

                    <p className="description-about-me__text-content">I can talk about my life for a long time. At my age, I have a little 
                        experience that I could share</p>

                    <p className="description-about-me__text-content">If life were a colorful tapestry, 
                    mine would be a vibrant mosaic, woven with diverse experiences and cherished moments. 
                    As an active and sociable individual, I relish every beat of life's rhythm, seeking to 
                    add value to each precious moment. </p>

                    <p className="description-about-me__text-content">Fuelled by a profound passion for programming, 
                    I have embraced my current role with fervor, and my aspiration is to become an outstanding 
                    programmer with an in-depth understanding of my craft. </p>

                    <p className="description-about-me__text-content">Looking ahead, my vision is one of perpetual 
                    growth, where I am determined to continually sharpen my skills and expand my knowledge. For me, 
                    the future is an exhilarating journey of intellectual enrichment and becoming a true coding 
                    maestro XD.</p>
                </div>

                <div>
                    <h2 className="description-about-me__second-header">My interests</h2>
                    <p className="description-about-me__text-content">Speaking of my interests, they may not be numerous, but they are carefully chosen to ensure 
                        a fulfilling and enriching holiday for both my physical well-being and mental growth. Here's 
                        a glimpse into the facets that make my leisure time truly worthwhile:</p>

                    <Box className="description-about-me__list" sx={{ display: 'flex', alignItems: 'start', textAlign: 'start', flexDirection: 'column', margin: '1% 0 0 10%' }}>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <TravelExploreIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">Travel and cultural exploration</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <FitnessCenterIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">Fitness classes</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <AutoStoriesIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">Reading</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <VideocamIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">Photo and video shooting</span>
                        </Typography>
                    </Box>
                </div>

                <div className="description-skills__education-container">
                    <h2 className="description-about-me__second-header education">Education</h2>
                    <p className="description-about-me__text-content">Until the age of 17, I lived in Belarus, so I received my secondary 
                        general education there.</p>
                    <div className="description-about-me__secondary-school-container">
                        <HistoryEduIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text">2006 - 2017</p>
                        <p className="secondary-school-container__school-text">Secondary school in Brest</p>
                    </div>
                    <p className="description-about-me__text-content">At the university, I'm studing a little longer than expected due to 
                    personal circumstances. I'm studing at the computer science faculty.</p>
                    <div className="description-about-me__secondary-school-container">
                        <SchoolIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text">2019 - now</p>
                        <p className="secondary-school-container__school-text">Siedlce University of Natural Sciences and Humanities</p>
                    </div>
                    <p className="description-about-me__secondary-school-container">While studying at the university, I had the opportunity to take a free course "Information technology supporting people 
                        with visual impairment", which was organized by the university.</p>
                    <div className="description-about-me__secondary-school-container">
                        <BlindIcon className="secondary-school-container__icon" />
                        <p className="secondary-school-container__years-text">03/2020 - 06/2020</p>
                        <p className="secondary-school-container__school-text">Course "Information technology supporting people 
                        with visual impairment"</p>
                    </div>
                    <p className="description-about-me__secondary-school-container">A year later, I realized that the university does not provide enough narrow knowledge to be able to get a job in the 
                        future, so I bought courses in ReactJS. But during this course, I also greatly improved my knowledge in js, 
                        css and scss.</p>
                    <div className="description-about-me__secondary-school-container">
                        <p className="secondary-school-container__years-text">04/2021 - 10/2021</p>
                        <p className="secondary-school-container__school-text">Course "Dev Hero: Remote course Front End"</p>
                    </div> 
                    <p className="description-about-me__secondary-school-container">A couple of months later completing these courses, I was able to get a job :)</p>
                    <p className="description-about-me__secondary-school-container">After I got a remote job, I went to Germany for one semester as an exchange student to study. I studied in the 
                    city of Trier at the Faculty of Computer Science.</p>
                    <div className="description-about-me__secondary-school-container">
                        <p className="secondary-school-container__years-text">04/2022 - 08/2022</p>
                        <p className="secondary-school-container__school-text">Hochschule Trier – Trier University of Applied Sciences</p>
                    </div>
                </div>

                {/* <div className="description-courses__main-container">
                    <p className="description-courses__text-content">Ukończyłam kurs Easy Code</p>
                    <img className="description-courses__easy-icon" src={CourseIcon} alt="Easy code icon" />
                </div> */}
            </div>

            <div className="description-skills__main-container">
                <div className="description-skills__education-container">
                    <p className="description-about-me__secondary-school-container">Also, while studying in Germany, I managed to do an internship in a private company in Trier</p>
                    <div className="description-about-me__secondary-school-container">
                        <p className="secondary-school-container__years-text">06/2022 - 10/2022</p>
                        <p className="secondary-school-container__school-text">Practice at the firm meetingmasters.de e.K.</p>
                    </div>
                    <p className="description-about-me__secondary-school-container">I had to do part of the practice work remotely, as my German visa was expiring</p>
                </div>

                <div className="description-skills__ability-wrapper">
                    <h2 className="description-about-me__main-header">//Skills</h2>
                    <p className="description-about-me__text-content">Below are the skills I possess, along with a brief 
                    description of my proficiency level in each:</p>

                    <div className="skills__container-ability">
                        <Skills class='column-10 column' text='HTML 100%' tooltipTitle="Highly skilled in HTML" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-10 column' text='CSS 100%' tooltipTitle="The confident and capable coder" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-10 column' text='JS 100%' tooltipTitle="Confident in JavaScript" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-8 column' text='TypeScript 80%' tooltipTitle="80% knowledgeable programmer XD" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-7 column' text='ReactJS 70%' tooltipTitle="Aspiring to the heights ;)" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-9 column' text='Scss 90%' tooltipTitle="Skillful in SCSS" />
                    </div>
                    <div className="skills__container-ability">
                        <Skills class='column-5 column' text='D3.js 50%' tooltipTitle="Style-savvy coder :) At least I try to be XD" />
                    </div>
                </div>
                <p className="description-about-me__text-content">Below you can find the tools and libraries that I managed to work with ;)</p>
            </div>
        </div>
    )
}

export default Description;