import components from '../index';
import icons from '../icons';
import { useState } from 'react';

//Creating a part "Portfolio"
const Portfolio = () =>{
    //Import of required components
    const {Print, Work, PortfolioIcons, Circle} = components;
    //Import of required icons
    const {Circle_01, PortfolioCase_01, PortfolioCase_02, PortfolioCase_03, PortfolioCase_04, PortfolioCase_05, PortfolioCase_06} = icons
    //UseStates to animate the work blocks on the page
    const [firstWork, setFirstWork] = useState(false);
    const [secondWork, setSecondWork] = useState(false);
    const [thirdWork, setThirdWork] = useState(false);
    const [fourthWork, setFourthWork] = useState(false);
    const [fifthWork, setFifthWork] = useState(false);
    const [sixthWork, setSixthWork] = useState(false);
 
    return (
        <div id="portfolio" className="main-wrapper__my-works my-works">
            <div className="general">
                <Print component='h2' class='my-works__main-header margin-zero main-header' text='//My works' />
                <Print component='h2' class='my-works__second-header second-header margin-zero' text='Portfolio' />
                <Print component='p' text='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur.' />

                <Circle class='my-works__container-circle-6' classImg='my-works__circle-6 circle' src={Circle_01} />

                <div className="my-works__container-works">
                    <div onMouseOver={() => setFirstWork(true)} onMouseLeave={() => setFirstWork(false)} className="my-works__work work-1">
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { firstWork ? <Work wrapper='new-work-1' firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/> : null}
                        <img alt='Visualization of work' id="img-1" src={PortfolioCase_01} />
                        <PortfolioIcons />
                    </div>

                    <div onMouseOver={() => setSecondWork(true)} onMouseLeave={() => setSecondWork(false)} className="my-works__work work-2">
                        {/* If secondWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { secondWork ? <Work wrapper='new-work-2' firstText='Office software' secondText='- explore' thirdText='Tools:React/Redux/' fourthText='Program 02:/Flexbox'/> : null }
                        <img alt='Visualization of work' src={PortfolioCase_02} />
                        <PortfolioIcons />
                    </div>

                    <div onMouseOver={() => setThirdWork(true)} onMouseLeave={() => setThirdWork(false)} className="my-works__work work-3">
                        {/* If thirdWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { thirdWork ? <Work wrapper='new-work-3' firstText='Office software' secondText='- why do we use it?' thirdText='Tools:React/Redux/' fourthText='Program 02:/Flexbox'/> : null}
                        <img alt='Visualization of work' src={PortfolioCase_03} />
                        <PortfolioIcons />
                    </div>

                    <div onMouseOver={() => setFourthWork(true)} onMouseLeave={() => setFourthWork(false)} className="my-works__work  work-4">
                        {/* If fourthWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { fourthWork ? <Work wrapper='new-work-4' firstText='Office software' secondText='- e-course' thirdText='Tools:React/Redux/' fourthText='Program 02:/Flexbox'/> : null }
                        <img alt='Visualization of work' src={PortfolioCase_04} />
                        <PortfolioIcons />
                    </div>

                    <div onMouseOver={() => setFifthWork(true)} onMouseLeave={() => setFifthWork(false)} className="my-works__work  work-5">
                        {/* If fifthWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { fifthWork ? <Work wrapper='new-work-5' firstText='Office software' secondText='- online shop' thirdText='Tools:React/Redux/' fourthText='Program 02:/Flexbox'/> : null}
                        <img alt='Visualization of work' src={PortfolioCase_05} />
                        <PortfolioIcons />
                    </div>

                    <div onMouseOver={() => setSixthWork(true)} onMouseLeave={() => setSixthWork(false)} className="my-works__work  work-6">
                        {/* If sixthWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        { sixthWork ? <Work wrapper='new-work-6' firstText='Office software' secondText='- discover world' thirdText='Tools:React/Redux/' fourthText='Program 02:/Flexbox'/> : null}
                        <img alt='Visualization of work' src={PortfolioCase_06} />
                        <PortfolioIcons />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;