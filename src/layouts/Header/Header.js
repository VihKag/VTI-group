import './Header.css';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
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