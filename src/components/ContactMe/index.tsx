import ContactIcon from "../../assets/contact_icon.png";
import ContactMainImg from '../../assets/contact_me.jpg';
import SendIcon from '@mui/icons-material/Send';
import "./style.css"
import { Tooltip } from "@mui/material";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_03.png";

const ContactMe = () => {
    return(
        <div id="contactMe" className="main-wrapper__contact-me contact-me">
            <div className="general">
                <div className="contact-me__relative-wrapper">
                    <div className="contact-me__content-wrapper">
                        <h2 className="contact-me__main-header margin-zero main-header">//Contact me</h2>
                        <p className="standard-color-and-font">If you are willing to work with me, contact me. 
                            I can join your cenference to serve you with my engeneering experience</p>

                        <form className='contact-me__form'>
                            <input className="contact-me__input" type="text" placeholder="Your e-mail" /><br></br>
                            <input className="contact-me__input" type="text" placeholder="Your name" /><br></br>
                            <textarea className="contact-me__input" rows={7} placeholder="Please, put here your massage/request."></textarea>
                            <div className="contac-me__submit-wrapper">
                                <div className="contact-me__submit-container">
                                    <input className="contact-me__submit" type="submit" value="Send"></input>
                                    <Tooltip title='Sent the message'>
                                        <SendIcon />
                                    </Tooltip>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="contact-me__middle-part">
                        <img className="contact-me__contact-icon" src={ContactIcon} alt="Contact icon" />
                        
                        <div className="contact-me__middle-part-container">
                            <p className="contact-me__middle-part-inscription margin-zero standard-color-and-font">lalitaklimchuk@gmail.com</p>
                            <p className="contact-me__middle-part-inscription margin-zero standard-color-and-font">+48 123 345 567</p>
                        </div>
                    </div>

                    <div className="contact-me__image-wrapper">
                        <div className='contact-me__main-image-container'>
                            <img className='contact-me__main-image' src={ContactMainImg} alt='Main image in the section contact me' />
                        </div>

                        <div className='contact-me__text-container'>
                            <p className="contact-me__description margin-zero standard-color-and-font">author:Lalita Klimchuk</p>
                            <p className="contact-me__description margin-zero standard-color-and-font">username:@LalitaKlimchuk</p>
                            <p className="contact-me__description margin-zero standard-color-and-font">description:University Graduate | Software Engineer</p>
                            <p className="contact-me__description margin-zero standard-color-and-font">homepage:lalitaKlimchuk.pl</p>
                            <p className="contact-me__description margin-zero standard-color-and-font">repository type:Open-source</p>
                            <p className="contact-me__description margin-zero standard-color-and-font">url:github.com/lalitaKlimchuk</p>
                        </div>
                    </div> 

                    <Circles class="contact-me__container-circle-1" classImg="contact-me__circle-1 circle" src={Circle_01} />
                </div>
            </div>
        </div>
    )
}

export default ContactMe;