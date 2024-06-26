import ToolItem from "../ToolItem";
import Mui from '../../assets/mui.png';
import Redux from '../../assets/redux.png';
import Formik from '../../assets/formik.png';
import D3 from '../../assets/d3.jpeg';
import Bitbucket from '../../assets/bitbucket.png';
import StyledComponents from '../../assets/styled-components.png';
import AdobePhotoshop from "../../assets/adobe-photoshop.png";
import Angular from "../../assets/angular.png";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png";
import Vue from "../../assets/vue_js.png";
import { useTranslation } from "react-i18next";

//Creating the part "Tools"
const Tools = () => {
    const {t} = useTranslation();

    return(
        <div id="portfolio" className="tools__margin-wrapper">
            <div className="tools__main-container">
                <h2 className="main-header">{t('tools')}</h2>
                <h2 className="second-header">{t('toolsLibraries')}</h2>

                <Circles class="tools__container-circle-1 circle" classImg="circle-1" src={Circle_01} />

                <div className="tools__content-container">
                    <ToolItem wrapper='icon-1 icon' href="https://mui.com" src={Mui} firstText='Material UI' secondText='v 5.14.2' />
                    <ToolItem wrapper='icon-2 icon' href="https://redux-toolkit.js.org" src={Redux} firstText='Redux Toolkit' secondText='1.9.5' />
                    <ToolItem wrapper='icon-3 icon' href="https://formik.org/docs/overview" src={Formik} firstText='Formik docs' secondText='2.4.2' />
                    <ToolItem wrapper='icon-5 icon' href="https://d3js.org" src={D3} firstText='D3.js' secondText='4.0.1' />
                    <ToolItem wrapper='icon-6 icon' href="https://bitbucket.org/product/" src={Bitbucket} firstText='Bitbucket' secondText='7.21.0' />
                    <ToolItem wrapper='icon-7 icon' href="https://styled-components.com" src={StyledComponents} firstText='Styled Components' secondText='6.0.5' />
                    <ToolItem wrapper='icon-8 icon' href="https://www.adobe.com/products/photoshop.html" src={AdobePhotoshop} firstText='Adobe Photoshop' secondText='24.7' />
                    <ToolItem wrapper='icon-9 icon' href="https://vuejs.org" src={Vue} firstText='Vue.js' secondText='2.7' />
                    <ToolItem wrapper='icon-10 icon' href="https://angular.io" src={Angular} firstText='Angular' secondText='8 and 17' />
                </div>
            </div>
        </div>
    )
}

export default Tools;