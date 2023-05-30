import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaPlus} from "react-icons/fa";
import { useAuth } from "../../context/useAuth";

function NavBar() {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar bg-dark fs-5 py-2 px-5" data-bs-theme="dark">
            <h1 className="text-white">Take Note</h1>
            <div>
                <Link to="" className="text-white text-decoration-none me-5 fs-4"><FaHome/></Link>
                <Link to="addNote" className="text-white text-decoration-none me-5 fs-4"><FaPlus/></Link>
                <Link to="profilePage" className="text-white text-decoration-none me-5 fs-4"><FaUser/></Link>
                <span className="text-white fs-4 pe-auto" onClick={() => logout()}><FaSignOutAlt /></span>
            </div>
        </nav>
    );
}

export default NavBar;