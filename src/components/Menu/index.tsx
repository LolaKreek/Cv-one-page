import { Box, Tooltip, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import "./style.css"

const Menu = () => {
    return(
        <div className="menu__main-container">
            <div className="menu-initials__main-container">
                <h1 className="menu-initials__text-content">L.K.</h1>
            </div>

            <div className="menu-content__main-container">
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Typography className="menu-content__items" sx={{ minWidth: 100 }}>About me</Typography>
                    <Typography className="menu-content__items" sx={{ minWidth: 100 }}>Skills</Typography>
                    <Typography className="menu-content__items" sx={{ minWidth: 100 }}>Portfolio</Typography>
                    <Typography className="menu-content__items" sx={{ minWidth: 100 }}>Blog</Typography>
                    <Typography className="menu-content__items" sx={{ minWidth: 100 }}>Contact me</Typography>
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
    )
}

export default Menu;