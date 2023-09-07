import image from '../assets/img/logopetshop.png'; 
const Logo = () =>{
    return(
        <div className="Header-logo">
            <div className="Header-logo_container">
                <div className="logo">
                    <a href='/'>
                        <img src={image} alt="Logo shop"/>
                    </a>                    
                </div>
            </div>
        </div>
    );
}
export default Logo;