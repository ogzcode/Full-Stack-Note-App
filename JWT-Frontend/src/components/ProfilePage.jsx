import { useAuth } from "../context/useAuth";

export default function ProfilePage () {
    const { user } = useAuth();
    return (
        <div className="">
            <p>{user.email}</p>
        </div>
    );
}
