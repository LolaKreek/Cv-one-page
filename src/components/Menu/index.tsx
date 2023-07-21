import components from '../index';
import icons from '../icons';

//Creating a part "Menu"
const Menu = () => {
    //Import of required components
    const {Print, List} = components;
    //Import of required icons
    const {PercentageLine, GitHub, FacebookIcon, LinkedinIcon} = icons;

    const menuList = [
        {id: 1, href: '#aboutMe', text: 'About me'},
        {id: 2, href: '#skills', text: 'Skills'},
        {id: 3, href: '#portfolio', text: 'Portfolio'},
        {id: 4, href: '#blogs', text: 'Blog'},
        {id: 5, href: '#contactMe', text: 'Contact me'}
    ]

    const iconList = [
        {id: 1, class: 'list-icon__icon rotate', src: PercentageLine},
        {id: 4, class: 'list-icon__icon', src: LinkedinIcon},
        {id: 4, class: 'list-icon__icon git-hub__icon', src: GitHub},
        {id: 3, class: 'list-icon__icon', src: FacebookIcon}
    ]

    return(
        <nav className="main-wrapper__menu menu">
            <div className="menu__general">
                <div className="menu__container-initials">
                    <Print component='p' class='menu__initials' text='L.K.' />
                </div>

                <div className="menu__container-list">
                    <List class='menu__list list' element='a' lists={menuList} />
                    <List class='menu__list-icon list list-icon' element='img' lists={iconList} />
                </div>
            </div>
        </nav>
    );
}

export default Menu;