import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/userSlice";

import { AiOutlineMenu } from "react-icons/ai"
import { MdLogout } from "react-icons/md"

import { useToggleContext } from "../../context/useToggleContext";

function NavBar() {
    const { toggle, handleToggle } = useToggleContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logout());
        redirect("/login");
        //window.location.reload();
    }

    return (
        <nav className="text-slate-300" style={{ borderBottom: ".1rem solid #cbd5e1" }}>
            <div className="flex justify-between items-center py-4 px-8">
                <button className="text-2xl cursor-pointer" onClick={() => handleToggle(!toggle)}><AiOutlineMenu /></button>
                <button className="text-2xl cursor-pointer" onClick={() => handleLogout()}><MdLogout /></button>
            </div>
        </nav>
    );
}

export default NavBar;