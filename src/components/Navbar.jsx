const Navbar = () => {
    return(
        <div className="Header-navbar">
            <div className="Navbar-container container">
                <div className="Nav-list">
                    <div class="Nav-group">
                        <a class="Nav-item Nav-title" href="/#">Site Title</a>
                    </div>  
                    <div class="Nav-group">
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