import './Footer.css'
import fbicon from '../../assets/img/facebook.png';
import tticon from '../../assets/img/tiktok.png';
import isicon from '../../assets/img/instagram.png';
function Footer(){
    return(
        <>
            <div className="Footer">
                <div className="container Footer-container">
                    <div className="row">
                        <div className="col-3">
                            <h2>GIỚI THIỆU</h2>
                                <p>Petshop là cửa hàng chuyên cung cấp các loại thú cưng và sản phẩm liên quan. Chúng tôi đảm bảo cung cấp cho bạn những người bạn bốn chân tuyệt vời và các dịch vụ chăm sóc thú cưng chất lượng.</p>
                            </div>
                        <div className="col-3">
                            <div className='footer-wrapper'>
                                <h2>ĐỊA CHỈ</h2>
                                <h3>Chi nhánh 1</h3>
                                <p>Địa chỉ: 123 Đường A, Quận 1, TP.HCM</p>
                                <p>Điện thoại: (123) 456-7890</p>
                            </div>
                            <div className='footer-wrapper'>
                                <h3>Chi nhánh 2</h3>
                                <p>Địa chỉ: 456 Đường B, Quận 2, TP.HCM</p>
                                <p>Điện thoại: (987) 654-3210</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <h2>HỖ TRỢ</h2>
                            <p>
                                Nếu bạn cần hỗ trợ hoặc có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi qua địa chỉ email: support@petshop.com hoặc số điện thoại: (123) 456-7890.
                            </p>
                        </div>
                        <div className="col-3">
                            <h2>KẾT NỐI</h2>
                            <div className='footer-wrapper'>
                                <img src={fbicon} alt='facebook'/>
                                <img src={tticon} alt='titok'/>
                                <img src={isicon} alt='instagram'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container contain-sm-text">
                    <div className='h3 sm-text'>@ 2023 Powered by Shopify</div>
                </div>
                
            </div>
        </>
    );
}
export default Footer;