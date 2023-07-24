import BlogItem from "../BlogItem";
import "./style.css"

const BlogPosts = () => {
    return(
        <div id="blogs" className="main-wrapper__blog-posts blog-posts">
            <div className="general">
                <h2 className='blog-posts__main-header margin-zero main-header'>//Blog posts</h2>
                <h2 className='blog-posts__second-header second-header margin-zero'>Hints and tips</h2>

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