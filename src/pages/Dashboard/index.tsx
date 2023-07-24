import AboutMe from "../../components/AboutMe";
import Description from "../../components/Description";
import Menu from "../../components/Menu";
import MyWorks from "../../components/MyWorks";
import Tools from "../../components/Tools";
import "./style.css"

const Dashboard = () => {
    return(
        <div className="dashboard__main-container">
            <Menu />
            <AboutMe />
            <Description />
            <Tools />
            <MyWorks />
        </div>
    )
}

export default Dashboard;