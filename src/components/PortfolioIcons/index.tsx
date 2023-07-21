import icons from '../icons';

//Creating one block with an image
//Each work block contains a PortfolioIcons, these icons are at the bootom (Two icons).
const PortfolioIcons = () => {
    //Import of required icons
    const {BitBucketIcon, ExternalLinkIcon} = icons;

    return(
        <div className="my-works__container-icons">
            <img alt='Leave an opinion' className='my-works__icons' src={BitBucketIcon} />
            <img alt='View Code' className='my-works__icons' src={ExternalLinkIcon}  />
        </div>
    );
}

export default PortfolioIcons;