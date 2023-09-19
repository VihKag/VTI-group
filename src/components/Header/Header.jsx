import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
function Header(){
    return(
        <>
            <div className="Header">
                <div className="Header-container">
                    <Logo/>
                    <Navbar/>
                </div>
            </div>
        </>
    )
}
export default Header;