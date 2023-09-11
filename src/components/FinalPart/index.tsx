import Polish from '../../assets/poland.png';
import Russian from '../../assets/russia.png';
import British from "../../assets/gbritain.png";
import Circle_01 from "../../assets/circle_03.png";
import MultipleLanguage from "../../assets/multiple-language.png";
import CollaborativeTeamPlayer from "../../assets/collaborative-team-player.png";
import ProblemSolvingCommunication from "../../assets/problem-solving-communication.png";
import ActiveListening from "../../assets/active-listening.png";
import ConflictResolution from "../../assets/conflict-resolution.png";
import ClearAndConciseCommunication from "../../assets/clear-and-concise-communication.png";
import AdaptabilityInCommunication from "../../assets/adaptability-in-communication.png";
import Circles from '../Circles';
import { useTranslation } from 'react-i18next';

//Creating a part "Final part" (language skills, closing thoughts, communication skills)
const FinalPart = () => {
    const {t} = useTranslation();

    return(
        <div className="final-part">
            <div className='final-part__flex-container'>
                <div className='final-part__right-part'>
                    <div className='right-part__language-skills'>
                        <h2 className='second-header final-part__second-header'>{t('finalLanguageSkills')}</h2>

                        <div className='language-skills__skills-wrapper'>
                            <div className='language-skills__skills-flex-container'>
                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Polish} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>{t('finalLanguagePolish')}</p>
                                        <p className='margin-zero'>{t('finalLanguagePolishLevel')}</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Russian} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>{t('finalLanguageRussian')}</p>
                                        <p className='margin-zero'>{t('finalLanguageRussianLevel')}</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={British} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>{t('finalLanguageEnglish')}</p>
                                        <p className='margin-zero'>{t('finalLanguageEnglishLevel')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='language-skills__multiple-icon-wrapper'>
                                <img className='language-skills__miltiple-icon' src={MultipleLanguage} />
                            </div>
                        </div>
                    </div>
                    
                    <div className='right-part__final-thoughts'>
                        <h2 className='second-header final-part__second-header'>{t('finalClosingThoughts')}</h2>

                        <p className='standard-color-and-font'>{t('finalClosingThoughtsParagraph')}</p>
                    </div>
                </div>

                <Circles class="final-part__container-circle-1 circle" classImg="circle-1" src={Circle_01} />

                <div className='final-part__communication-skills'>
                    <h2 className='second-header communication-skills__second-header'>{t('finalCommunicationSkills')}</h2>

                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={CollaborativeTeamPlayer} />
                        </div>
                        
                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero '>{t('finalSkillsCollaborativePlayer')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsCollaboravitePlayerDescription')}</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ActiveListening} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>{t('finalSkillsActiveListening')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsActiveListeningDescription')}</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ClearAndConciseCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>{t('finalSkillsClearCommunication')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsClearCommunicationDescription')}</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ConflictResolution} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>{t('finalSkillsConflictResolution')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsConflictResolutionDescription')}</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ProblemSolvingCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>{t('finalSkillsProblemSolving')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsProblemSolvingDescription')}</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={AdaptabilityInCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>{t('finalSkillsCommunicationAdaptability')}</p>
                            <p className='standard-color-and-font margin-zero'>{t('finalSkillsCommunicationAdaptabilityDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalPart;