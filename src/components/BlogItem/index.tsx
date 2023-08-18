import { Tooltip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ComponentsTypes } from "../types";

const BlogItem = (props: ComponentsTypes.BlogItemPropsType) => {
    return(
        <div className={"blog-posts__container-posts " + props.wrapper}>
            <img className='blog-posts__main-image' alt='Blogs' src={props.src} />
                    
            <div className="post-content">
                <h2 className="post-content__main-post-header">{props.title}</h2>
                <h2 className="post-content__second-post-header">Secondary Title</h2>
                <p className='post-content__paragraph standard-color-and-font'>Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="post-content__content-read-more">
                    <p className="content__read-more">Read more</p>
                    <Tooltip title="Read more" className="content__read-more-arrow">
                        <ArrowForwardIcon />
                    </Tooltip>
                </div>

                <div className="post-content__author-container">
                    <p className="author-container__author">author, 01.09.2020</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem