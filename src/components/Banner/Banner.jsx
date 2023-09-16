import imgdiv2 from '../../assets/img/bannerpet.jpg';
import './index.css';
const Banner = ()=>{
    return(
        <>
            <div className="banner">
                <div className='banner-container'>
                        <img className='banner-img' src={imgdiv2} alt=''></img>
                </div>
            </div>
        </>
        
    );
}
export default Banner;