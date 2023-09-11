import BlogItem from "../BlogItem";
import Circles from "../Circles";
import Circle_01 from "../../assets/circle_01.png";
import Circle_02 from "../../assets/circle_02.png";
import { useTranslation } from "react-i18next";

//Creating a part "Blogs"
const BlogPosts = () => {
    const {t} = useTranslation();

    return(
        <div id="blog" className="blog-posts">
            <div className="general">
                <h2 className='main-header'>{t('blogPosts')}</h2>
                <h2 className='second-header'>{t('blogSecondHeader')}</h2>

                <Circles class="blog-posts__container-circle-1 circle" classImg="circle-1" src={Circle_01} />
                <Circles class="blog-posts__container-circle-2 circle" classImg="circle-2" src={Circle_02} />

                <div className="blog-posts__content-main-container">
                    <BlogItem wrapper='post-1' 
                        src='https://lenovogaming.pl/media/cms_pages_category/image/12/2206/01_Legion_Tower_5_Full_Gaming_Battle_Station_wasko.jpg?ts=1602246057'
                        title={t('blogItemTitle')} />

                    <BlogItem wrapper='post-2' 
                        src='https://cdn.pkt.pl/f-13195-komputery-stacjonarne-dedykowane-dla-graczy.jpg'
                        title={t('blogItemTitle')} />
                </div>
            </div>
        </div>
    )
}

export default BlogPosts;