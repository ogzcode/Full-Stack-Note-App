import { Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerThunk, setError, setErrorMessage } from "../../redux/slice/userSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerify] = useState("");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const error = useSelector(state => state.user.error);
    const isFetching = useSelector(state => state.user.isFetching);
    const errorMessage = useSelector(state => state.user.errorMessage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //for the alert message
    useEffect(() => {
        if (error) {
            setShow(true);
            let timer = setTimeout(() => {
                setShow(false);
                dispatch(setErrorMessage(null));
                dispatch(setError(false));
            }, 1500);

            return () => clearInterval(timer);
        }
    }, [error]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if ((email && password)) {
            if (password !== verifyPassword) {
                setValidated(true);
                setPassword("");
                setVerify("");
                return;
            }

            const response = await dispatch(registerThunk({ email, password }));
            
            if (errorMessage === null) {
                navigate("/login");
            }

            setEmail("");
            setPassword("");
            setVerify("");
        }

        setValidated(true);
    };

    const handleChange = (val, setVal) => {
        setVal(val);
        setValidated(true);
    };

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column position-relative" style={{ height: "100vh" }}>
            {
                errorMessage && <Alert show={show} variant={"danger"} className="position-absolute top-0 start-50 translate-middle-x mt-4">
                    {errorMessage}
                </Alert>
            }
            <h2 className="mb-3" style={{ fontSize: "36px" }}>Signup</h2>
            <Form className="w-25" onSubmit={handleSubmit} noValidate validated={validated}>
                {/* email */}
                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                        value={email} onChange={e => handleChange(e.target.value, setEmail)} required />
                    <Form.Control.Feedback type="invalid">
                        Please write your email
                    </Form.Control.Feedback>
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
                        value={password} onChange={e => handleChange(e.target.value, setPassword)} required />
                    <Form.Control.Feedback type="invalid">
                        Please write your password
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicVerifyPassword" className="mb-3">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control type="password" placeholder="Verify Password" name="password"
                        value={verifyPassword} onChange={e => handleChange(e.target.value, setVerify)} required />
                    <Form.Control.Feedback type="invalid">
                        Please verify your password
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                    <button type="button" className="btn btn-link" style={{ fontSize: "14px" }} onClick={() => navigate("/login")}>Go to login page</button>
                </div>
                {/* submit button */}
                <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                        <span className="d-inline me-2">Register</span> { isFetching && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </Button>
                </div>
            </Form>
        </div>
    )
}