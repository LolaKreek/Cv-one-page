import { Tooltip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ComponentsTypes } from "../types";

const BlogItem = (props: ComponentsTypes.BlogItemPropsType) => {
    return(
        <div className={"blog-posts__container-posts " + props.wrapper}>
            <img className='posts__main-image' alt='Blogs' src={props.src} />
                    
            <div className="blog-posts__content-wrapper">
                <h2 className="blog-posts__main-post-header margin-zero main-header">{props.title}</h2>
                <h2 className="blog-posts__second-post-header second-header margin-zero">Secondary Title</h2>
                <p className='blog-posts__paragraph standard-color-and-font'>Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="blog-posts__content-read-more">
                    <p className="blog-posts__read-more margin-zero">Read more</p>
                    <Tooltip title="Read more" className="blog-posts__read-more-arrow">
                        <ArrowForwardIcon />
                    </Tooltip>
                </div>

                <div className="blog-posts__authot-container">
                    <p className="blog-posts__author">author, 01.09.2020</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem