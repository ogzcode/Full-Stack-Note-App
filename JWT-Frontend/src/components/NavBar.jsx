import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function NavBar() {
    const { user } = useAuth();
    return (
        <nav className="navbar bg-dark fs-5 py-2 px-5" data-bs-theme="dark">
            <div>
                <Link to="/" className="text-white text-decoration-none me-5">Home</Link>
                {
                    user && (<Link to="/profile" className="text-white text-decoration-none">Profile</Link>)
                }
            </div>
            {
                !user && (
                    <div>
                        <Link to="/signup" className="text-white text-decoration-none me-5">Signup</Link>
                        <Link to="/login" className="text-white text-decoration-none">Login</Link>
                    </div>
                )
            }
        </nav>
    );
}

export default NavBar;