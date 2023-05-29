import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <p>404 Page Not Found !!</p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Home Page</button>
            </div>
        </div>
    );
}