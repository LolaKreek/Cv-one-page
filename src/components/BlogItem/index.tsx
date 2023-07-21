import components from '../index';
import { ComponentsTypes } from '../types';

//Creating one blog post in the "Blogs" part
//ARGUMENTS:
//wrapper       -> wrapper class name (main wrapper in this component)
//src           -> link to picture
//title         -> title text (main title in this component, but second title in "Blogs" part) 
const BlogItem = (props:ComponentsTypes.BlogItemPropsType) => {
    //Import of required components
    const {Print} = components;

    return(
        <div className={"blog-posts__container-posts " + props.wrapper}>
            <img className='posts__main-image' alt='Blogs' src={props.src} />
                    
                    <div className="blog-posts__content-wrapper">
                        <Print component='h2' class='blog-posts__main-header margin-zero main-header' text={props.title} />
                        <Print component='h2' class='blog-posts__second-header second-header margin-zero' text='Secondary Title' />

                        <Print component='p' class='blog-posts__paragraph standard-color-and-font' text='Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur.' />

                        <div className="blog-posts__content-read-more">
                            <Print component='p' class='blog-posts__read-more margin-zero' text='Read more' />
                            <Print component='div' class='blog-posts__arrow' />
                        </div>

                        <Print component='p' class='blog-posts__author-data' text='author, 01.09.2020' />
                    </div>
        </div>
    );
}   

export default BlogItem;