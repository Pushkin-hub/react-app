import { Link } from "react-router-dom";


const NavMenu = () => {
    return (
        <>
            <Link to="/" className="links">
                Main
            </Link>
            <Link to="/about" className="links">
                About
            </Link>
            <Link to="/test" className="links">
                News
            </Link>
        </>
    )
}
export default NavMenu;