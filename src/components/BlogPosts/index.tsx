import BlogItem from "../BlogItem";
import Circles from "../Circles";
import "./style.css";
import Circle_01 from "../../assets/circle_01.png";
import Circle_02 from "../../assets/circle_02.png";

const BlogPosts = () => {
    return(
        <div id="blog" className="main-wrapper__blog-posts blog-posts">
            <div className="general">
                <h2 className='blog-posts__main-header margin-zero main-header'>//Blog posts</h2>
                <h2 className='blog-posts__second-header second-header margin-zero'>Hints and tips</h2>

                <Circles class="blog-posts__container-circle-1" classImg="blog-posts__circle-1 circle" src={Circle_01} />
                <Circles class="blog-posts__container-circle-2" classImg="blog-posts__circle-2 circle" src={Circle_02} />

                <div className="blog-posts__content-main-container">
                    <BlogItem wrapper='post-1 post' 
                        src='https://lenovogaming.pl/media/cms_pages_category/image/12/2206/01_Legion_Tower_5_Full_Gaming_Battle_Station_wasko.jpg?ts=1602246057'
                        title='//Title 01' />

                    <BlogItem wrapper='post-2 post' 
                        src='https://cdn.pkt.pl/f-13195-komputery-stacjonarne-dedykowane-dla-graczy.jpg'
                        title='//Title 02' />
                </div>
            </div>
        </div>
    )
}

export default BlogPosts;