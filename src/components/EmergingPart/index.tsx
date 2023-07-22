import { Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import "./style.css"

const EmergingPart = () => {
    return(
        <div className="emerging-part__main-container">
            <h2 className="emerging-part__main-header">//Hi, my name is Lalita Klimchuk</h2>
            <h2 className="emerging-part__second-header">Software Engineer</h2>
            <p className="emerging-part__text-content">Passionate Techy and Tech Author with 3 years of experience whithin the field.</p>

            <div className="emerging-part__buttons-container">
                <p className="emerging-part-buttons__text-content">See my works</p>

                <div className="emerging-part-buttons__buttons-content">
                    <Tooltip className="emerging-part-buttons__item" title="GitHub">
                        <GitHubIcon sx={{color: "#c8c8c7", fontSize: 35}} />
                    </Tooltip>
                    <Tooltip className="emerging-part-buttons__item" title="Code of this page">
                        <LogoDevIcon sx={{color: "#c8c8c7", fontSize: 40 }} />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default EmergingPart;