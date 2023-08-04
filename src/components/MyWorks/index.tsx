import { useState } from "react";
import "./style.css"
import Work from "../Work";
import Map from '../../assets/project-map.png';
import Genshin from '../../assets/project-genshin.png';
import UnderConstruction from '../../assets/under-construction.png';
import PortfolioIcons from "../PortfolioIcons";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png"

const MyWorks = () => {
    const [firstWork, setFirstWork] = useState(false);
    const [secondWork, setSecondWork] = useState(false);
    const [thirdWork, setThirdWork] = useState(false);

    return(
        <div className="my-works__main-container">
            <h2 className="my-works__main-header">//My works</h2>
            <h2 className="my-works__second-header">Portfolio</h2>

            <p className="my-works__text-content">Welcome to my evolving portfolio of programming projects, where quality 
            reigns supreme over quantity. While my collection may not be extensive, rest assured that each project is imbued 
            with soul, passion, and unwavering commitment. With every line of code written, I embark on a journey of continuous 
            improvement, determined to hone my skills and create software solutions that leave a lasting impression. As the years 
            pass, my portfolio will undoubtedly grow in both scope and sophistication, becoming a true reflection of my dedication 
            to the craft and my relentless pursuit of excellence. So, join me on this dynamic journey, where every project tells 
            a unique story of growth, learning, and the unwavering desire to make a difference through the power of programming.</p>

            <div className="my-works__container-works">
                <Circles class="my-works__container-circle-1" classImg="my-works__circle-1 circle" src={Circle_01} />

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setFirstWork(true)} onMouseLeave={() => setFirstWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {firstWork ? <Work wrapper={firstWork ? 'show-wrapper' : 'hidden-wrapper'} firstText='Interactive world map' secondText='Contains information about the location of containers and the status of documents for these containers' thirdText='Skills: ReactJS/TypeScript/CSS/HTML/JSX' fourthText='Tools: d3-geo/geojson/Mui/Vite.js'/> : <></>}
                        <img className="my-work__main-image" alt='Visualization of map project' id="img-1" src={Map} />
                    </div>
                    
                    <PortfolioIcons href="https://github.com/LolaKreek/Map-with-d3.js" />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setSecondWork(true)} onMouseLeave={() => setSecondWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {secondWork ? <Work wrapper='show-wrapper' firstText='Forum for the game Genshin Impact' secondText='These are ordinary static pages with text. The project was made to defend one of the subjects at the university' thirdText='Skills: ReactJS/JS/CSS/HTML' fourthText='Tools: Google firebase/Styled Components'/> : <></>}
                        <img className="my-work__main-image" alt='Visualization of Genshin project' id="img-2" src={Genshin} />
                    </div>

                    <PortfolioIcons href="https://github.com/LolaKreek/GenshinForum" />
                </div>

                <div className="my-works__work work-1">
                    <div onMouseOver={() => setThirdWork(true)} onMouseLeave={() => setThirdWork(false)}>
                        {/* If firstWork === true (the mouse is on the element) -> show the component, otherwise do not show */}
                        {thirdWork ? <Work wrapper='show-wrapper' firstText='Graduate work' secondText='Work is currently underway on this project. The project will be added to the portfolio when it is fully completed. But you can follow the development of this project on github :)' thirdText='Skills: ReactJS/TypeScript/CSS/HTML and etc' fourthText='Tools: Mui/Redux toolkit/Formik docs/Vite.js and etc'/> : <></>}
                        <img className="my-work__main-image" alt='Visualization of Graduate project' id="img-3" src={UnderConstruction} />
                    </div>

                    <PortfolioIcons href="https://github.com/LolaKreek/graduateWork" />
                </div>
            </div>
        </div>
    )
}

export default MyWorks;