import './style.css';
import Polish from '../../assets/poland.png';
import Russian from '../../assets/russia.png';
import British from "../../assets/gbritain.png";
import Circle_01 from "../../assets/circle_03.png";
import MultipleLanguage from "../../assets/multiple-language.png";
import Circles from '../Circles';

const FinalPart = () => {
    return(
        <div className="final-part__main-wrapper">
            <div className='final-part__main-flex-container'>
                <div className='final-part__right-part'>
                    <div className='final-part__language-skills'>
                        <h2 className='language-skills__second-header'>Language skills</h2>

                        <div className='language-skills__skills-wrapper'>
                            <div className='language-skills__skills-flex-container'>
                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Polish} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language'>Polish</p>
                                        <p className='language-skill__level'>Advanced [C1]</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={Russian} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language'>Russian</p>
                                        <p className='language-skill__level'>Native</p>
                                    </div>
                                </div>

                                <div className='language-skills__language-container'>
                                    <div className='language-skills__language-icon-wrapper'>
                                        <img className='language-skills__language-icon' src={British} />
                                    </div>

                                    <div className='language-skill__language-and-level-wrapper'>
                                        <p className='language-skill__language'>English</p>
                                        <p className='language-skill__level'>Intermediate [B1]</p>
                                    </div>
                                </div>
                            </div>

                            <div className='final-part__language-multiple-icon-wrapper'>
                                <img className='language-skills__miltiple-icon' src={MultipleLanguage} />
                            </div>
                        </div>
                    </div>
                    
                    <div className='final-part__final-thoughts'>
                        <h2 className='final-thoughts__second-header'>Closing thoughts</h2>

                        <p className='final-thoughts__text'>In this journey of growth and discovery, my unwavering passion for programming 
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

                <Circles class="final-part__container-circle-1" classImg="final-part__circle-1 circle" src={Circle_01} />

                <div className='final-part__communication-skills'>
                    <h2 className='communication-skills__second-header'>Communication skills</h2>

                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Collaborative team player</p>
                        <p className='communication-skill__description'>Proficient in working within diverse teams, actively participating 
                            in discussions, and contributing constructively to project development.</p>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Active Listening</p>
                        <p className='communication-skill__description'>Demonstrated skill in attentively understanding project requirements 
                        and user feedback, ensuring accurate implementation and client satisfaction.</p>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Clear and Concise Communication</p>
                        <p className='communication-skill__description'>Expressing ideas succinctly, avoiding ambiguity in technical 
                        discussions and written communications.</p>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Conflict Resolution</p>
                        <p className='communication-skill__description'>Skillful in addressing disagreements constructively and 
                        finding amicable solutions during project development.</p>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Problem-Solving Communication</p>
                        <p className='communication-skill__description'>Communicating solutions to programming challenges with clarity 
                        and precision, enabling effective troubleshooting and debugging.</p>
                    </div>
                    <div className='communication-skill__wrapper'>
                        <p className='communication-skill__main-header'>Adaptability in Communication</p>
                        <p className='communication-skill__description'>Tailoring communication style to suit different audiences, 
                        whether it be fellow programmers, management, or end-users.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalPart;