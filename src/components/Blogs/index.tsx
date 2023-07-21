import components from '..';
import icons from '../icons';

//Creating a part "Blogs"
const Blogs = () => {
    //Import of required components
    const {Circle, Print, BlogItem} = components;
    //Import of required icons
    const {Circle_01, Circle_03} = icons;

    return(
        <div id="blogs" className="main-wrapper__blog-posts blog-posts">
        <div className="general">
            <Print component='h2' class='blog-posts__main-header margin-zero main-header' text='//Blog posts' />
            <Print component='h2' class='blog-posts__second-header second-header margin-zero' text='Hints and tips' />

            <Circle class='blog-posts__container-circle-7' classImg='blog-posts__circle-7 circle' src={Circle_01} />

            <BlogItem wrapper='post-1 post' 
                src='https://lenovogaming.pl/media/cms_pages_category/image/12/2206/01_Legion_Tower_5_Full_Gaming_Battle_Station_wasko.jpg?ts=1602246057'
                title='//Title 01' />

            <BlogItem wrapper='post-2 post' 
                src='https://cdn.pkt.pl/f-13195-komputery-stacjonarne-dedykowane-dla-graczy.jpg'
                title='//Title 02' />

            <Circle class='blog-posts__container-circle-8' classImg='blog-posts__circle-8 circle' src={Circle_03} />
        </div>
    </div>
    );
}

export default Blogs;