import { Box, Link, Tooltip, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ChangeLanguage from "../ChangeLanguage.tsx";
import { useTranslation } from "react-i18next";

//Creating a part "Menu"
const Menu = () => {
    const {t} = useTranslation();

    return(
        <div className="menu">
            <div className="menu__main-container">
                <div className="menu-initials">
                    <h1 className="menu-initials__text-content">L.K.</h1>
                </div>

                <div className="menu-content__main-container menu-content">
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography className="menu-content__items" sx={{ minWidth: 'auto', margin: '0 10px' }}><a className="menu-content__links" href="#aboutMe">{t('menuAboutMe')}</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 'auto', margin: '0 10px' }}><a className="menu-content__links" href="#skills">{t('menuSkills')}</a></Typography>
                        <Typography className="menu-content__items" sx={{ minWidth: 'auto', margin: '0 10px' }}><a className="menu-content__links" href="#portfolio">{t('Portfolio')}</a></Typography>
                        {/* <Typography className="menu-content__items" sx={{ minWidth: 'auto', margin: '0 10px' }}><a className="menu-content__links" href="#blog">{t('menuBlog')}</a></Typography> */}
                        <Typography className="menu-content__items" sx={{ minWidth: 'auto', margin: '0 10px' }}><a className="menu-content__links" href="#contactMe">{t('menuContactMe')}</a></Typography>
                        <HorizontalRuleIcon sx={{ transform: `rotate(90deg)` }} />
                        
                        <Tooltip className="memu-content__icon" title="LinkedIn">
                            <Link className="menu__linked-in-link" href="https://www.linkedin.com/in/lalita-klimchuk-137b28227/" target="_blank">
                                <LinkedInIcon />
                            </Link>
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <Link className="menu__git-hub-link" href="https://github.com/LolaKreek" target="_blank">
                                <GitHubIcon />
                            </Link>
                        </Tooltip>

                        <div className="menu__change-language">
                            <ChangeLanguage />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Menu;