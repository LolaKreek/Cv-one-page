import { Box, Typography } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CodeIcon from '@mui/icons-material/Code';
import CourseIcon from "../../assets/easy_code_button_gray.png"
import "./style.css"
import Skills from "../Skills";

const Description = () => {
    return(
        <div id="skills" className="description__main-container">
            <div className="description-about-me__main-container">
                <div className="description-about-me__content-container">
                    <h2 className="description-about-me__main-header">//About me</h2>
                    <h2 className="description-about-me__second-header">All about Techy</h2>

                    <p className="description-about-me__text-content">Lorem ipsum dolor sit amet,</p>
                    <p className="description-about-me__text-content">consectetur adipiscing edit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat.</p>
                    <p className="description-about-me__text-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.</p>
                </div>

                <div>
                    <h2 className="description-about-me__second-header">My interests</h2>

                    <Box className="description-about-me__list" sx={{ display: 'flex', alignItems: 'start', textAlign: 'start', flexDirection: 'column', margin: '1% 0 0 10%' }}>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <MusicNoteIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">music</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <KitesurfingIcon className="description-list-item__icon" />
                            <span className="description-list-item__span">kitesurfing</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <AutoStoriesIcon  className="description-list-item__icon" />
                            <span className="description-list-item__span">reading</span>
                        </Typography>
                        <Typography className="description-about-me__list-item" sx={{ minWidth: 150 }}>
                            <CodeIcon  className="description-list-item__icon" />
                            <span className="description-list-item__span">programming</span>
                        </Typography>
                    </Box>
                </div>

                <div className="description-courses__main-container">
                    <p className="description-courses__text-content">Ukończyłam kurs Easy Code</p>
                    <img className="description-courses__easy-icon" src={CourseIcon} alt="Easy code icon" />
                </div>
            </div>

            <div className="description-skills__main-container">
                <h2 className="description-about-me__main-header">//Skills</h2>
                <p className="description-about-me__text-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="skills__container-ability">
                    <Skills class='column-10 column' text='PHP 100%' />
                </div>
                <div className="skills__container-ability">
                    <Skills class='column-9 column' text='PHP 90%' />
                </div>
                <div className="skills__container-ability">
                    <Skills class='column-8 column' text='PHP 80%' />
                </div>
                <div className="skills__container-ability">
                    <Skills class='column-9 column' text='PHP 90%' />
                </div>
                <div className="skills__container-ability">
                    <Skills class='column-7 column' text='PHP 70%' />
                </div>
                <div className="skills__container-ability">
                    <Skills class='column-10 column' text='PHP 100%' />
                </div>
            </div>
        </div>
    )
}

export default Description;