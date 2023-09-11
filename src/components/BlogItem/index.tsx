import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Tooltip } from "@mui/material";
import { ComponentsTypes } from "../types";
import { useTranslation } from 'react-i18next';

//Creating one blog post in the "Blogs" part
//PROPS:
//wrapper       -> wrapper class name (main wrapper in this component)
//src           -> link to picture
//title         -> title text (main title in this component, but second title in "Blogs" part) 
const BlogItem = (props: ComponentsTypes.BlogItemPropsType) => {
    const {t} = useTranslation();
    return(
        <div className={"blog-posts__container-posts " + props.wrapper}>
            <img className='blog-posts__main-image' alt='Blogs' src={props.src} />
                    
            <div className="post-content">
                <h2 className="post-content__main-post-header main-header">{props.title}</h2>
                <h2 className="post-content__second-post-header second-header">{t('blogItemHeader')}</h2>
                <p className='post-content__paragraph standard-color-and-font'>{t('blogSecondDescription')}</p>

                <div className="post-content__content-read-more">
                    <p className="content__read-more">{t('blogReadMore')}</p>
                    <Tooltip title="Read more" className="content__read-more-arrow">
                        <ArrowForwardIcon />
                    </Tooltip>
                </div>

                <div className="post-content__author-container">
                    <p className="author-container__author">{t('blogAuthor')}, 01.09.2020</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem