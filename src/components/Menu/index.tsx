import { Box, Tooltip, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import "./style.css"

const Menu = () => {
    return(
        <div className="menu-content__fixed-wrapper">
            <div className="menu__main-container">
                <div className="menu-initials__main-container">
                    <h1 className="menu-initials__text-content">L.K.</h1>
                </div>

                <div className="menu-content__main-container">
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography className="menu-content__items" sx={{ minWidth: 100 }}><a className="menu-content__links" href="#aboutMe">About me</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 100 }}><a className="menu-content__links" href="#skills">Skills</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 100 }}><a className="menu-content__links" href="#portfolio">Portfolio</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 100 }}><a className="menu-content__links" href="#blog">Blog</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 100 }}><a className="menu-content__links" href="#contactMe">Contact me</a></Typography>
                        <HorizontalRuleIcon sx={{ transform: `rotate(90deg)` }} />
                        <Tooltip className="menu-main-container__icon" title="LinkedIn">
                            <LinkedInIcon />
                        </Tooltip>
                        <Tooltip className="menu-main-container__icon" title="GitHub">
                            <GitHubIcon />
                        </Tooltip>
                        <Tooltip className="menu-main-container__icon" title="Instagram">
                            <InstagramIcon />
                        </Tooltip>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Menu;