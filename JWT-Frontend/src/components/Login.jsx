import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
            <h2 className="mb-3" style={{ fontSize: "36px" }}>Login</h2>
            <Form className="w-25">
                {/* email */}
                <Form.Group controlId="formBasicEmailLogin" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPasswordLogin">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                {/* submit button */}
                <div className="text-center mt-3">
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
} 