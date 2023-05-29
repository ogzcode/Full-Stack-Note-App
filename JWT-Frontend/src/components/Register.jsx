import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { register, setError, errorMessage } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        register(email, password);

        setEmail("");
        setPassword("");
    };

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
            <h2 className="mb-3" style={{ fontSize: "36px" }}>Signup</h2>
            <Form className="w-25">
                {/* email */}
                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {
                        errorMessage && <p className="text-danger mt-2" style={{ fontSize: "12px"}}>{ errorMessage }</p>
                    }
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                </Form.Group>

                <div className="text-center mt-1">
                    <button className="btn btn-link" style={{ fontSize: "14px" }} onClick={() => navigate("/login") }>Go to login page</button>
                </div>
                {/* submit button */}
                <div className="text-center mt-3">
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    )
}