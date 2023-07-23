import AboutMe from "../../components/AboutMe";
import Description from "../../components/Description";
import Menu from "../../components/Menu";
import Tools from "../../components/Tools";
import "./style.css"

const Dashboard = () => {
    return(
        <div className="dashboard__main-container">
            <Menu />
            <AboutMe />
            <Description />
            <Tools />
        </div>
    )
}

export default Dashboard;