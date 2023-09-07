import imgblgdog from '../assets/img/blogdog.jpg';
import imgblgcat from '../assets/img/blogcat.jpg';
import imgblgtrlpet from '../assets/img/travelpet.jpg';
const Blog = () =>{
    return(
        <div className="blog container">
            <div className="blog-container">
                <div className="blog-card">
                    <img className="blog-img" src={imgblgdog} alt="blogimg"></img>
                    <div className="center-text">
                        <h4 className="blog decription">Bí Quyết Tạo Cuộc Sống Hạnh Phúc Cho Chó Cưng Của Bạn</h4>
                    </div>
                    <div className="end-text">
                        <h6 className="blog decription">By Baret Musket</h6>
                    </div>
                </div>
                <div className="blog-card">
                    <img className="blog-img" src={imgblgcat} alt="blogimg"></img>
                    <div className="center-text">
                        <h4 className="blog decription">10 Cách Tạo Môi Trường Hạnh Phúc Cho Mèo Cưng Của Bạn</h4>
                    </div>
                    <div className="end-text">
                        <h6 className="blog decription">By Marry Kate</h6>
                    </div>
                </div>
                <div className="blog-card">
                    <img className="blog-img" src={imgblgtrlpet} alt="blogimg"></img>
                    <div className="center-text">
                        <h4 className="blog decription">Hành Trình Vui Vẻ: Đi Du Lịch Cùng Thú Cưng Yêu Quý</h4>
                    </div>
                    <div className="end-text">
                        <h6 className="blog decription">By Marry Kate</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;