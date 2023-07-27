import { useState } from "react";
import "./style.css"
import Work from "../Work";
import PortfolioCaseIcon from "../../assets/portfolio_case_01.png"
import PortfolioIcons from "../PortfolioIcons";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png"

const MyWorks = () => {
    const [firstWork, setFirstWork] = useState(false);
    const [secondWork, setSecondWork] = useState(false);
    const [thirdWork, setThirdWork] = useState(false);
    const [fourthWork, setFourthWork] = useState(false);
    const [fifthWork, setFifthWork] = useState(false);
    const [sixthWork, setSixthWork] = useState(false);

    return(
        <div className="my-works__main-container">
            <h2 className="my-works__main-header">//My works</h2>
            <h2 className="my-works__second-header">Portfolio</h2>

            <p className="my-works__text-content">Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.</p>

            <div className="my-works__container-works">
                <Circles class="my-works__container-circle-1" classImg="my-works__circle-1 circle" src={Circle_01} />

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setFirstWork(true)} onMouseLeave={() => setFirstWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={firstWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-1" src={PortfolioCaseIcon} />
                    </div>
                    
                    <PortfolioIcons />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setSecondWork(true)} onMouseLeave={() => setSecondWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={secondWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-2" src={PortfolioCaseIcon} />
                    </div>

                    <PortfolioIcons />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setThirdWork(true)} onMouseLeave={() => setThirdWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={thirdWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-3" src={PortfolioCaseIcon} />
                    </div>

                    <PortfolioIcons />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setFourthWork(true)} onMouseLeave={() => setFourthWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={fourthWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-4" src={PortfolioCaseIcon} />
                    </div>

                    <PortfolioIcons />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setFifthWork(true)} onMouseLeave={() => setFifthWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={fifthWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-4" src={PortfolioCaseIcon} />
                    </div>
                    
                    <PortfolioIcons />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setSixthWork(true)} onMouseLeave={() => setSixthWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        <Work wrapper={sixthWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Office software' secondText='- delicious sushi' thirdText='Tools:React/Redux/' fourthText='Program 01:/Flexbox'/>
                        <img className="my-work__main-image" alt='Visualization of work' id="img-4" src={PortfolioCaseIcon} />
                    </div>
                    
                    <PortfolioIcons />
                </div>
            </div>
        </div>
    )
}

export default MyWorks;