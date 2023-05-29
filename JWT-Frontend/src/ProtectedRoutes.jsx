import { Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

export const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();

    if (!user || user.token  === "") {
        return <Navigate to="/login" />;
    }

    return children;
};