import { Box, Link, Tooltip, Typography } from "@mui/material";
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
                            <Link className="menu__linked-in-link" href="https://www.linkedin.com/in/lalita-klimchuk-137b28227/" target="_blank">
                                <LinkedInIcon />
                            </Link>
                        </Tooltip>
                        <Tooltip className="menu-main-container__icon" title="GitHub">
                            <Link className="menu__git-hub-link" href="https://github.com/LolaKreek" target="_blank">
                                <GitHubIcon />
                            </Link>
                        </Tooltip>
                        <Tooltip className="menu-main-container__icon" title="Instagram">
                            <Link className="menu__instagram-link" href="https://www.instagram.com/lolakreek/" target="_blank">
                                <InstagramIcon />
                            </Link>
                        </Tooltip>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Menu;