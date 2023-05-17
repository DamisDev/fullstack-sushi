import logo from '../images/logo.png'
const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" >
                    <img src={logo} alt="Logo" width={30} height={24} className="d-inline-block align-text-top m-1" />
                    Fullstack Sushi
                </span>
            </div>
        </nav>
    );
}
export default Navbar;