import { Outlet, Link, useLocation } from "react-router-dom";

import "../../assets/css/auth.css"
import logo from "../../assets/svg/logo.svg";
import cat from "../../assets/svg/cat.svg";
import auth from "../../assets/svg/auth.svg";

export default function AuthLayout() {
    const location = useLocation();

    const getActive = (path: string) => {
        return location.pathname === path ? "bg-[#FFB636] text-white" : "bg-white text-[#4E4E4E]";
    }

    return (
        <div className="bg-[#F2F2F2]">
            <nav className="flex justify-between items-center px-6 py-3">
                <div className="flex items-center">
                    <img src={logo} className="w-[64px] pr-4" />
                    <h1 className="font-lato-bold text-2xl text-[#355443]">No<span className="text-[#FFB636]">TT</span>e</h1>
                </div>
                <div className="flex">
                    <Link className={`auth__link font-lato-regular mr-6 ${getActive("/login")}`} to="/login">Login</Link>
                    <Link className={`auth__link font-lato-regular ${getActive("/signup")}`} to="/signup">Sign Up</Link>
                </div>
            </nav>
            <div className="min-h-[780px] flex justify-center items-center relative">
                <img src={auth} className="absolute top-0 left-0 w-[600px]"/>
                <img src={cat} className=" absolute bottom-20 right-20 w-[300px]"/>

                <Outlet />
                
            </div>
            <footer>
                <div className="flex justify-center items-center py-6 text-[#787878] font-light text-sm font-lato-light">
                    <p>Copyright @ogzCode 2023</p>
                    <p className="mx-4">|</p>
                    <p>Privacy Policy</p>
                </div>
            </footer>
        </div>
    );
}