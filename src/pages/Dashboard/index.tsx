import AboutMe from "../../components/AboutMe";
import Description from "../../components/Description";
import Menu from "../../components/Menu";
import "./style.css"

const Dashboard = () => {
    return(
        <div className="dashboard__main-container">
            <Menu />
            <AboutMe />
            <Description />
        </div>
    )
}

export default Dashboard;