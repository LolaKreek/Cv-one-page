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

//Creating a part "Final part" (language skills, closing thoughts, communication skills)
const FinalPart = () => {
    return(
        <div className="final-part">
            <div className='final-part__flex-container'>
                <div className='final-part__right-part'>
                    <div className='right-part__language-skills'>
                        <h2 className='second-header final-part__second-header'>Language skills</h2>

                        <div className='language-skills__skills-wrapper'>
                            <div className='language-skills__skills-flex-container'>
                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Polish} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>Polish</p>
                                        <p className='margin-zero'>Advanced [C1]</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Russian} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>Russian</p>
                                        <p className='margin-zero'>Native</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={British} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language margin-zero'>English</p>
                                        <p className='margin-zero'>Intermediate [B1]</p>
                                    </div>
                                </div>
                            </div>

                            <div className='language-skills__multiple-icon-wrapper'>
                                <img className='language-skills__miltiple-icon' src={MultipleLanguage} />
                            </div>
                        </div>
                    </div>
                    
                    <div className='right-part__final-thoughts'>
                        <h2 className='second-header final-part__second-header'>Closing thoughts</h2>

                        <p className='standard-color-and-font'>In this journey of growth and discovery, my unwavering passion for programming 
                            has shaped me into a versatile and innovative developer. As I eagerly embrace 
                            the future, I am committed to making a profound impact in the tech world, 
                            leveraging my skills and determination to create software solutions that 
                            transcend boundaries and inspire the world. With a hunger for knowledge and a 
                            heart full of ambition, I look forward to embarking on new challenges, 
                            collaborating with like-minded individuals, and contributing to transformative 
                            projects that leave an indelible mark. Thank you for considering my candidacy, 
                            and I am excited to be part of a team that shares my vision for excellence and 
                            embraces the endless possibilities that lie ahead. Let's join forces and embark 
                            on a remarkable journey together :)</p>
                    </div>
                </div>

                <Circles class="final-part__container-circle-1 circle" classImg="circle-1" src={Circle_01} />

                <div className='final-part__communication-skills'>
                    <h2 className='second-header communication-skills__second-header'>Communication skills</h2>

                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={CollaborativeTeamPlayer} />
                        </div>
                        
                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero '>Collaborative team player</p>
                            <p className='standard-color-and-font margin-zero'>Proficient in working within diverse teams, actively participating 
                            in discussions, and contributing constructively to project development.</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ActiveListening} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>Active Listening</p>
                            <p className='standard-color-and-font margin-zero'>Demonstrated skill in attentively understanding project requirements 
                            and user feedback, ensuring accurate implementation and client satisfaction.</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ClearAndConciseCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>Clear and Concise Communication</p>
                            <p className='standard-color-and-font margin-zero'>Expressing ideas succinctly, avoiding ambiguity in technical 
                            discussions and written communications.</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ConflictResolution} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>Conflict Resolution</p>
                            <p className='standard-color-and-font margin-zero'>Skillful in addressing disagreements constructively and 
                            finding amicable solutions during project development.</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={ProblemSolvingCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>Problem-Solving Communication</p>
                            <p className='standard-color-and-font margin-zero'>Communicating solutions to programming challenges with clarity 
                            and precision, enabling effective troubleshooting and debugging.</p>
                        </div>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <div className='communication-skill__skill-icon-wrapper'>
                            <img className='communication-skill__skill-icon' src={AdaptabilityInCommunication} />
                        </div>

                        <div className='communication-skill__content-wrapper'>
                            <p className='communication-skill__main-header margin-zero'>Adaptability in Communication</p>
                            <p className='standard-color-and-font margin-zero'>Tailoring communication style to suit different audiences, 
                            whether it be fellow programmers, management, or end-users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalPart;