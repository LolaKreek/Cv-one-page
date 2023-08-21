import LogoDevIcon from '@mui/icons-material/LogoDev';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { Tooltip } from '@mui/material';
import { ComponentsTypes } from '../types';

const PortfolioIcons = (props: ComponentsTypes.PortfolioIconsType) => {
    return (
        <div className="portfolio__container-icons">
            <Tooltip title="GitHub">
                <a className='portfolio__icon-item' href="https://github.com/LolaKreek" target='_blank'>
                    <GitHubIcon sx={{fontSize: 32, color: "#c8c8c7"}} />
                </a>
            </Tooltip>

            <Tooltip title="Code of this project">
                <a className='portfolio__icon-item' href={props.href} target='_blank'>
                    <LogoDevIcon sx={{fontSize: 35, color: "#c8c8c7"}} />
                </a>
            </Tooltip>

            {props.showWebsite ? <Tooltip title="Open this project">
                <a className='portfolio__icon-item' href={props.showWebsite} target='_blank'>
                    <WebIcon sx={{fontSize: 39, color: "#c8c8c7"}} />
                </a>
            </Tooltip> : <></>}
        </div>
    )
}

export default PortfolioIcons;