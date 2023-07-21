import components from '../index';
import icons from '../icons';

//Creating a part "Contact Me"
const ContactMe = () => {
    //Import of required components
    const {Print} = components;
    //Import of required icons
    const {KontaktIkona, TheLast} = icons;

    return(
        <div id="contactMe" className="main-wrapper__contact-me contact-me">
            <div className="general">
                <div className="contact-me__relative-wrapper">
                    <div className="contact-me__content-wrapper">
                        <Print component='h2' class='contact-me__main-header margin-zero main-header' text='//Contact me' />
                        <Print component='p' class='standard-color-and-font' text='If you are willing to work with me, contact me. 
                            I can join your cenference to serve you with my engeneering experience' />

                        <form>
                            <input className="contact-me__input" type="text" placeholder="Your e-mail" /><br></br>
                            <input className="contact-me__input" type="text" placeholder="Your name" /><br></br>
                        <textarea className="contact-me__input" rows={7} placeholder="Please, put here your massage/request."></textarea>
                        <input className="contact-me__submit" type="submit" value="Send"></input>
                        </form>
                    </div>

                    <div className="contact-me__middle-part">
                        <img alt='Call and send message' src={KontaktIkona} />
                        <div className="contact-me__middle-part-container">
                            <Print component='p' class='contact-me__middle-part-inscription margin-zero standard-color-and-font' text='lalitaklimchuk@gmail.com' />
                            <Print component='p' class='contact-me__middle-part-inscription margin-zero standard-color-and-font' text='+48 123 345 567' />
                        </div>
                    </div>

                    <div className="contact-me__image-wrapper">
                        <img alt='Main' src={TheLast} />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='author:Lalita Klimchuk' />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='username:@LalitaKlimchuk' />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='description:University Graduate | Software Engineer' />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='homepage:lalitaKlimchuk.pl' />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='repository type:Open-source' />
                        <Print component='p' class='contact-me__description margin-zero standard-color-and-font' text='url:github.com/lalitaKlimchuk' />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ContactMe;