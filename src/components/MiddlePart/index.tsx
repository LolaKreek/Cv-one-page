import components from '../index';
import icons from '../icons';

//Creating a part "Middle Part"
const MiddlePart = () => {
    //Import of required components
    const {Print} = components;
    //Import of required icons
    const {BitBucketIcon, DevIcon} = icons;

    return(
        <div id="middle" className="about-me__middle-part middle-part">
            <Print component='h2' class='middle-part__main-header main-header' text='//Hi, my name is Lalita Klimchuk' />
            <Print component='h2' class='middle-part__main-header-mobile main-header' text='//My name is Lalita' />
            <Print component='h2' class='middle-part__second-header second-header' text='Software Engineer' />
            <Print component='p' class='standard-color-and-font' text='Passionate Techy and Tech Author with 3 years of experience whithin the field.' />
            <div className="middle-part__container-works">
                <Print component='p' class='middle-part__works standard-color-and-font' text='See my works' />
                <div className="middle-part__works-button">
                    <img alt='Leave an opinion' src={BitBucketIcon} />
                    <img alt='View Code' src={DevIcon} />
                </div>
            </div>
        </div>
    );
}

export default MiddlePart;