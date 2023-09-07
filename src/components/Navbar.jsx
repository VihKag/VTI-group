const Navbar = () => {
    return(
        <div className="Header-navbar">
            <div className="Navbar-container container">
                <div className="Nav-list">
                    <div className="Nav-group">
                        <a className="Nav-item Nav-title" href="/#">MENU</a>
                    </div>  
                    <div className="Nav-group">
                        <a className="Nav-item" href="/#">Search</a>
                        <a className="Nav-item" href="/#">Login</a>
                        <a className="Nav-item" href="/#">Cart</a>
                    </div>                                   
                </div>
            </div>
        </div>
    );
}
export default Navbar;