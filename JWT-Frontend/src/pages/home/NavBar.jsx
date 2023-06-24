import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaPlus} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/userSlice";

function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logout());
        navigate("/login");
        //window.location.reload();
    }

    return (
        <nav className="navbar bg-dark fs-5 py-2 px-5" data-bs-theme="dark">
            <h1 className="text-white">Take Note</h1>
            <div>
                <Link to="" className="text-white text-decoration-none me-5 fs-4"><FaHome/></Link>
                <Link to="add-note" className="text-white text-decoration-none me-5 fs-4"><FaPlus/></Link>
                <button className="btn text-white fs-4 pe-auto pointer" onClick={() => handleLogout()}><FaSignOutAlt /></button>
            </div>
        </nav>
    );
}

export default NavBar;