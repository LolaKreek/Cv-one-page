import LogoDevIcon from '@mui/icons-material/LogoDev';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material';
import { ComponentsTypes } from '../types';
import "./style.css";

const PortfolioIcons = (props: ComponentsTypes.PortfolioIconsType) => {
    return (
        <div className="my-works__container-icons">
            <Tooltip title="GitHub">
                <a className='my-works__icon-item' href="https://github.com/LolaKreek" target='_blank'>
                    <GitHubIcon sx={{fontSize: 32, color: "#c8c8c7"}} />
                </a>
            </Tooltip>

            <Tooltip title="Code of this project">
                <a className='my-works__icon-item' href={props.href} target='_blank'>
                    <LogoDevIcon sx={{fontSize: 35, color: "#c8c8c7"}} />
                </a>
            </Tooltip>
        </div>
    )
}

export default PortfolioIcons;