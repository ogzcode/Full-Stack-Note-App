import { useAuth } from "../../context/useAuth";
import userImage from "../../assests/user.png";

import { useNavigate } from "react-router-dom";

import { Form, Alert } from "react-bootstrap";

import { FaTwitter, FaFacebookF, FaInstagram, FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";

import Cookies from "universal-cookie";
const cookies = new Cookies();

import axios from "axios";

function EditForm() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [password, setPassword] = useState("");

    const { updateProfile, errorMessage, setError } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (first || last || password) {
            updateProfile(first, last, password);
            setFirst("");
            setLast("");
            setPassword("");
            setError("Profile data updated");
        }
    };

    return (
        <div className="profile-container mx-auto m-5 shadow rounded overflow-hidden p-4">
            <h2 className="text-center mb-4">Edit Profile</h2>
            <Form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                    <Form.Group className="col-sm-6">
                        <Form.Label className="form-label">First name</Form.Label>
                        <Form.Control type="text" className="form-control" id="firstName"
                            placeholder="Enter your first name" value={first} onChange={e => setFirst(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">
                            Valid first name is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="col-sm-6">
                        <Form.Label className="form-label">Last name</Form.Label>
                        <Form.Control type="text" className="form-control" id="lastName"
                            placeholder="Enter your last name" value={last} onChange={e => setLast(e.target.value)} required />
                        <Form.Control.Feedback className="invalid-feedback">
                            Valid last name is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="col-12">
                        <Form.Label className="form-label">New Password</Form.Label>

                        <Form.Control type="password" className="form-control" id="password"
                            value={password} onChange={e => setPassword(e.target.value)} placeholder="New password" required />
                        <Form.Control.Feedback className="invalid-feedback">
                            Your username is required.
                        </Form.Control.Feedback>

                    </Form.Group>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </Form >
        </div >
    );
}

export default function ProfilePage() {
    const [editPage, setEditPage] = useState(true);
    const { user, setUser, errorMessage, setError, deleteAccount } = useAuth();
    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const token = cookies.get("TOKEN");

    const getUserData = async () => {
        const config = {
            method: "get",
            url: "http://localhost:3000/auth",
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };

        await axios(config)
            .then(response => {
                setUserData(response.data.user);
                console.log(result.data.user);
            })
            .catch(e => {
                e = new Error();
            });
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if (errorMessage) {
            setShow(true);
            let timer = setTimeout(() => {
                setShow(false);
                setError("");
            }, 1000);

            return () => {
                clearInterval(timer);
                window.location.reload();
            };
        }
    }, [errorMessage]);

    const handleDelete = () => {
        deleteAccount();
        cookies.remove("TOKEN", { path: "/" });
        setUser("");
        setError("User deleted. Bye Bye :)");
        navigate("/login");
    };

    return (
        <div className="vh-100 position-relative pt-5">
            {
                errorMessage && <Alert show={show} variant={"success"} className="position-absolute top-0 end-0">
                    {errorMessage}
                </Alert>
            }
            <div className="profile-container mx-auto shadow rounded overflow-hidden">
                <div className="profile-gradient"></div>
                <div className="position-relative pt-5 ps-4">
                    <img src={userImage} className="profile-image" />
                    <span className="profile-bell-icon fs-4 text-warning"><FaBell /></span>
                    <div className="mt-2">
                        <h1 className="fs-5">{userData.firstName} {userData.lastName}</h1>
                        <p className="text-secondary mb-1" style={{ fontSize: "14px" }}>Los Angeles, Unite State</p>
                        <p className="text-dark fw-semibold" >{user.email}</p>
                    </div>
                    <div className="mb-4 d-flex">
                        <span className="social-icon fs-4 me-3 bg-info rounded pe-auto text-white"><FaFacebookF /></span>
                        <span className="social-icon fs-4 me-3 bg-info rounded pe-auto text-white"><FaTwitter /></span>
                        <span className="social-icon fs-4 me-3 bg-info rounded pe-auto text-white"><FaInstagram /></span>
                    </div>
                    <div className="d-flex justify-content-between pe-4 mb-4">
                        <button className="btn btn-outline-primary" onClick={() => setEditPage(!editPage)}>Edit Profile</button>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete()}>Delete Account</button>
                    </div>
                </div>
            </div>
            {
                editPage && <EditForm />
            }
        </div>
    );
}
