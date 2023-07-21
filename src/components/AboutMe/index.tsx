import { useEffect, useState } from 'react';
import components from '../index';
import icons from '../icons';

//Creating a part "About Me"
const AboutMe = () => {
    //Import of required components
    const {Circle, List, Print, Skills, MiddlePart} = components;
    //Import of required icons
    const {MainImage, EasyCodeButtonGray, Circle_01, Circle_02, Circle_03} = icons;
    //UseState to animate the appearance of a block "MiddlePart"
    const [showMiddlePart, setShowMiddlePart] = useState(false);
    //UseState to animate the appearance of skills
    const [showSkills, setShowSkills] = useState(false);

    const middlePart = () => setShowMiddlePart(true);

    const list = [ 
        {id: 1, text: "music"}, 
        {id: 2, text: "kitesurfing"}, 
        {id: 3, text: "cycling"}
    ];

    useEffect (() => {
        //Waits on the screen scroll
        window.onscroll = () => setShowSkills(true);
    }, [])

    return(
        //onMouseOver -> checks if any mouse acton has occurred. If yes, shows the component
        <div className="main-wrapper__about-me about-me" onMouseOver={middlePart}>
            <div className="general">
                <div className="about-me__first-part first-part">
                    <div className='first-part__image-container'>
                        <img className="first-part__image" alt='Icon Main' src={MainImage} />
                    </div>
                    
                    <Circle class="about-me__container-circle-1" classImg="about-me__circle-1 circle" src={Circle_01} />
                    <Circle class="about-me__container-circle-2" classImg="about-me__circle-2 circle" src={Circle_02} />

                    {/* Shows the component if showMiddlePart === true */}
                    { showMiddlePart ? <MiddlePart /> : null}

                    <div className='first-part__freelancer-main-container'>
                        <div className="first-part__freelancer freelancer">
                            <Print component='h2' class='freelancer__main-header margin-zero main-header' text='//I am a freelancer' />
                            <Print component='p' class='standard-color-and-font' text='Contact me if you want to work with me' />
                            <div className="freelancer__container-button">
                                <Print component='div' class='freelancer__hire-me' text='Hire me' />
                                <Print component='div' class='freelancer__download-cv' text='Download CV' />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div id="aboutMe" className="about-me__second-part second-part">
                    <div className="second-part__about-me about-me">
                        <Print component='h2' class='about-me__main-header margin-zero main-header' text='//About me' />
                        <Print component='h2' class='about-me__second-header second-header margin-zero' text='All about Techy' />
                        <Print component='p' class='standard-color-and-font' text='Lorem ipsum dolor sit amet,' />
                        <Print component='p' class='standard-color-and-font' text='consectetur adipiscing edit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.' />
                        <Print component='p' class='standard-color-and-font' text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.' />
                        <Print component='h2' class='about-me__second-header second-header margin-zero' text='My interests' />

                        <List class='standard-color-and-font' lists={list} />

                        <div className="about-me__container-inscription">
                            <Print component='p' class='about-me__inscription standard-color-and-font' text='Ukończyłam kurs Easy Code' />
                            <img className="about-me__image" alt='Icon Easy Code' src={EasyCodeButtonGray} />
                        </div>
                    </div>
                    <Circle class="second-part__container-circle-3" classImg="second-part__circle-3 circle" src={Circle_03} />
                    <Circle class="second-part__container-circle-4" classImg="second-part__circle-4 circle" src={Circle_03} />
                    
                    <div  id="skills" className="second-part__skills skills">
                        <Print component='h2' class='skills__main-header margin-zero main-header' text='//Skills' />
                        <Print component='p' class='standard-color-and-font' text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.' />

                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-10 column' text='PHP 100%' /> : null }
                            </div>
                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-9 column' text='JS 90%' /> : null }
                            </div>
                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-9 column' text='HTML 90%' /> : null }
                            </div>
                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-6 column' text='NODEJS 60%' /> : null }
                            </div>
                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-9 column' text='CSS 90%' /> : null }
                            </div>
                            <div className='skills__container-ability'>
                                {/* If there is a scroll then show the component */}
                                { showSkills ? <Skills class='column-6 column' text='GO 60%' /> : null }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;