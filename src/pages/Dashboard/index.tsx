import AboutMe from "../../components/AboutMe";
import BlogPosts from "../../components/BlogPosts";
import ContactMe from "../../components/ContactMe";
import Description from "../../components/Description";
import FinalPart from "../../components/FinalPart";
import Menu from "../../components/Menu";
import MyWorks from "../../components/MyWorks";
import Tools from "../../components/Tools";

const Dashboard = () => {
    return(
        <div className="dashboard__main-container">
            <Menu />
            <AboutMe />
            <Description />
            <Tools />
            <MyWorks />
            <FinalPart />
            <BlogPosts />
            <ContactMe />
        </div>
    )
}

export default Dashboard;