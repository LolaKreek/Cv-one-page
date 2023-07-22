import AboutMe from "../../components/AboutMe";
import Menu from "../../components/Menu";
import "./style.css"

const Dashboard = () => {
    return(
        <div className="dashboard__main-container">
            <Menu />
            <AboutMe />
        </div>
    )
}

export default Dashboard;