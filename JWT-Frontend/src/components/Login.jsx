import { Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const { login, errorMessage, setError } = useAuth();

    useEffect(() => {
        if (errorMessage) {
            setShow(true);
            let timer = setTimeout(() => {
                setShow(false);
                setError("");
            }, 1500);

            return () => clearInterval(timer);
        }
    }, [errorMessage]);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (email && password) {
            login(email, password);

            setEmail("");
            setPassword("");
        }

        setValidated(true);
    };

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column position-relative" style={{ height: "100vh" }}>
            {
                errorMessage && <Alert show={show} variant={"danger"} className="position-absolute top-0 start-50 translate-middle-x mt-4">
                    {errorMessage}
                </Alert>
            }
            <h2 className="mb-3" style={{ fontSize: "36px" }}>Login</h2>
            <Form className="w-25" onSubmit={handleSubmit} noValidate validated={validated}>
                {/* email */}
                <Form.Group controlId="formBasicEmailLogin" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" 
                    value={email} onChange={e => setEmail(e.target.value)} required/>
                    <Form.Control.Feedback type="invalid">
                        Please write your email
                    </Form.Control.Feedback>
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPasswordLogin">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" 
                    value={password} onChange={e => setPassword(e.target.value)} required/>
                    <Form.Control.Feedback type="invalid">
                        Please write your password
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center mt-1">
                    <button type="button" className="btn btn-link" style={{ fontSize: "14px" }} onClick={() => navigate("/")}>Go to register page</button>
                </div>

                {/* submit button */}
                <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
} 