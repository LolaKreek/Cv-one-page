import ContactIcon from "../../assets/contact_icon.png";
import ContactMainImg from '../../assets/contact_me.jpg';
import SendIcon from '@mui/icons-material/Send';
import { TextField, Tooltip } from "@mui/material";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_03.png";
import { useFormik } from "formik";
import { contactMeScheme } from "../../features/formik/formikScheme";
import { allInputs, textAreas } from "../stylesVariable";

const ContactMe = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          message: ''
        },
        validationSchema: contactMeScheme,
        onSubmit: (values) => {
            try {
                window.open(`mailto:lalitaklimchuk@gmail.com?subject=${values.name}&body=${values.message}`)
            } catch (error) {
                console.error(error);
            }
        },
    });

    const SubmitHandle = (event:any) => {
        formik.submitForm();
        console.log("CLICKED: ", event);
    }

    return(
        <div id="contactMe" className="main-wrapper__contact-me contact-me">
            <div>
                <div className="contact-me__relative-wrapper">
                    <div className="contact-me__content-wrapper contact-wrapper">
                        <h2 className="contact-wrapper__main-header main-header">//Contact me</h2>
                        <h2 className="contact-wrapper__second-header second-header">Let's connect!</h2>
                        <p className="standard-color-and-font contact-wrapper__paragraph">I am thrilled to be available for contact and excitedly looking forward 
                        to connecting with you! Whether it's regarding career prospects, collaboration opportunities, or simply sharing 
                        ideas, don't hesitate to reach out using the information provided below. As a dedicated and enthusiastic individual, 
                        I'm eager to explore new possibilities and engage in meaningful conversations that can lead to mutual growth and success. 
                        So, let's connect and embark on a journey of innovation and excellence together!</p>

                        <form className='contact-wrapper__form' onSubmit={formik.handleSubmit}>
                            <TextField
                                name="email"
                                label="Your email"
                                variant="outlined"
                                autoComplete="on"
                                type="text"
                                className="form__input"
                                value={formik.values.email}
                                sx={allInputs}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}/>

                            <TextField
                                name="name"
                                label="Subject"
                                variant="outlined"
                                autoComplete="on"
                                type="text"
                                className="form__input"
                                value={formik.values.name}
                                sx={allInputs}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} />

                            <TextField
                                name="message"
                                label="Message"
                                variant="outlined"
                                autoComplete="on"
                                type="textarea"
                                multiline
                                rows={4}
                                className="form__input"
                                value={formik.values.message}
                                sx={textAreas}
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message} />

                            <div className="form__submit-wrapper">
                                <div className="submit__container" onClick={SubmitHandle}>
                                    <p className="submit__submit-button">Send</p>
                                    <Tooltip title="Sent the message">
                                        <SendIcon />
                                    </Tooltip>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="contact-me__middle-part">
                        <img className="contact-middle-part__contact-icon" src={ContactIcon} alt="Contact icon" />
                        
                        <div>
                            <p className="standard-color-and-font">lalitaklimchuk@gmail.com</p>
                            <p className="standard-color-and-font">+48 123 345 567</p>
                        </div>
                    </div>

                    <div className="contact-me__image-wrapper">
                        <div className="contact-image__image-container">
                            <img className="contact-image__image" src={ContactMainImg} alt="Main image in the section contact me" />
                        </div>

                        <div className="contact-image__text-container">
                            <p className="standard-color-and-font">author: Lalita Klimchuk</p>
                            <p className="standard-color-and-font">username: @LolaKreek</p>
                            <p className="standard-color-and-font">description: Student</p>
                            <p className="standard-color-and-font">occupation: Front-End Developer</p>
                            <p className="standard-color-and-font">repository type: Open-source</p>
                            <p className="standard-color-and-font">gitHub: https://github.com/LolaKreek</p>
                        </div>
                    </div> 

                    <Circles class="contact-me__container-circle-1 circle" classImg="circle-1" src={Circle_01} />
                </div>
            </div>
        </div>
    )
}

export default ContactMe;