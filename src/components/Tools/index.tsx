import ToolItem from "../ToolItem";
import Mui from '../../assets/mui.png';
import Redux from '../../assets/redux.png';
import Formik from '../../assets/formik.png';
import Vite from '../../assets/vite.png';
import D3 from '../../assets/d3.jpeg';
import Bitbucket from '../../assets/bitbucket.png';
import StyledComponents from '../../assets/styled-components.png';
import "./style.css";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png"

const Tools = () => {
    return(
        <div id="portfolio" className="tools__margin-wrapper">
            <div className="tools__main-container">
                <h2 className="tools__main-header">//Tools</h2>
                <h2 className="tools__second-header">Tools and libraries</h2>

                <Circles class="tools__container-circle-1" classImg="tools__circle-1 circle" src={Circle_01} />

                <div className="tools__content-container">
                    <ToolItem wrapper='icon-1 icon' src={Mui} firstText='Material UI' secondText='v 5.14.2' />
                    <ToolItem wrapper='icon-2 icon' src={Redux} firstText='Redux Toolkit' secondText='1.9.5' />
                    <ToolItem wrapper='icon-3 icon' src={Formik} firstText='Formik docs' secondText='2.4.2' />
                    <ToolItem wrapper='icon-4 icon' src={Vite} firstText="Vite.js" secondText='4.4.7' />
                    <ToolItem wrapper='icon-5 icon' src={D3} firstText='D3.js' secondText='4.0.1' />
                    <ToolItem wrapper='icon-6 icon' src={Bitbucket} firstText='Bitbucket ' secondText='7.21.0' />
                    <ToolItem wrapper='icon-7 icon' src={StyledComponents} firstText='Styled Components' secondText='6.0.5' />
                </div>
            </div>
        </div>
    )
}

export default Tools;