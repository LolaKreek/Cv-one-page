import ContactIcon from "../../assets/contact_icon.png";
import ContactMainImg from '../../assets/contact-me.jpg';
import SendIcon from '@mui/icons-material/Send';
import { TextField, Tooltip } from "@mui/material";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_03.png";
import { useFormik } from "formik";
import { contactMeScheme } from "../../features/formik/formikScheme";
import { allInputs, textAreas } from "../stylesVariable";
import { useTranslation } from "react-i18next";

//Creating a part "Contact Me"
const ContactMe = () => {
    const {t} = useTranslation();

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
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

    const SubmitHandle = () => {
        formik.submitForm();
    }

    return(
        <div id="contactMe" className="main-wrapper__contact-me contact-me">
            <div>
                <div className="contact-me__relative-wrapper">
                    <div className="contact-me__content-wrapper contact-wrapper">
                        <h2 className="contact-wrapper__main-header main-header">{t('contactMe')}</h2>
                        <h2 className="contact-wrapper__second-header second-header">{t('contactMeSecondHeader')}</h2>
                        <p className="standard-color-and-font contact-wrapper__paragraph">{t('contactMeParagraph')}</p>

                        <form className='contact-wrapper__form' onSubmit={formik.handleSubmit}>
                            <TextField
                                name="email"
                                label={t('contactMeFormPlaceholderEmail')}
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
                                label={t('contactMeFromPlaceholderSubject')}
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
                                label={t('contactMeFormPlaceholderMessage')}
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
                                    <p className="submit__submit-button">{t('contactMeFormSubmitButton')}</p>
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
                            <p className="standard-color-and-font">+48 722 169 993</p>
                        </div>
                    </div>

                    <div className="contact-me__image-wrapper">
                        <div className="contact-image__image-container">
                            <img className="contact-image__image" src={ContactMainImg} alt="Main image in the section contact me" />
                        </div>

                        <div className="contact-image__text-container">
                            <p className="standard-color-and-font">{t('contactMeAuthor')}: Lalita Klimchuk</p>
                            <p className="standard-color-and-font">{t('contactMeUsername')}: @LolaKreek</p>
                            <p className="standard-color-and-font">{t('contactMedescription')}: Student</p>
                            <p className="standard-color-and-font">{t('contactMeOccupation')}: Front-End Developer</p>
                            <p className="standard-color-and-font">{t('contactMeRepositoryType')}: Open-source</p>
                            <p className="standard-color-and-font">{t('contactMeGitHub')}: https://github.com/LolaKreek</p>
                        </div>
                    </div> 

                    <Circles class="contact-me__container-circle-1 circle" classImg="circle-1" src={Circle_01} />
                </div>
            </div>
        </div>
    )
}

export default ContactMe;