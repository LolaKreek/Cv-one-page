import LogoDevIcon from '@mui/icons-material/LogoDev';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material';
import "./style.css"

const PortfolioIcons = () => {
    return (
        <div className="my-works__container-icons">
            <Tooltip className='my-works__icon-item' title="GitHub">
                <GitHubIcon sx={{fontSize: 32, color: "#c8c8c7"}} />
            </Tooltip>

            <Tooltip className='my-works__icon-item' title="Code of this project">
                <LogoDevIcon sx={{fontSize: 35, color: "#c8c8c7"}} />
            </Tooltip>
        </div>
    )
}

export default PortfolioIcons;