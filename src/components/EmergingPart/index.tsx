import { Link, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const EmergingPart = () => {
    return(
        <div className="emerging-part">
            <h2 className="emerging-part__main-header main-header">//Hello, my name is Lalita Klimchuk</h2>
            <h2 className="emerging-part__second-header second-header">Junior Front-End Developer</h2>
            <p className="emerging-part__text-content standard-color-and-font">I am an ambitious student with a year of work experience looking to improve my skills and knowledge in programming :)</p>

            <div className="emerging-part__buttons-container">
                <p className="emerging-part-buttons__text-content">See my works</p>

                <div className="emerging-part-buttons__buttons-content">
                    <Tooltip className="emerging-part-buttons__item" title="GitHub">
                        <Link className="emerging-part-buttons__git-hub-link" href="https://github.com/LolaKreek" target="_blank">
                            <GitHubIcon sx={{color: "#c8c8c7", fontSize: 35}} />
                        </Link>
                    </Tooltip>
                    <Tooltip className="emerging-part-buttons__item" title="Code of this page">
                        <Link className="emerging-part-buttons__logo-dev-link" href="https://github.com/LolaKreek/Cv-one-page" target="_blank">
                            <LogoDevIcon sx={{color: "#c8c8c7", fontSize: 40 }} />
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default EmergingPart;