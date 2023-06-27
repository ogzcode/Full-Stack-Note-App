import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { registerThunk, setError, setErrorMessage } from "../../redux/slice/userSlice";

import { useDispatch, useSelector } from "react-redux";

import registerSVG from "../../assets/register.svg";
import { Alert } from "../../components/Alert";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerify] = useState("");
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
                setPassword("");
                setVerify("");
                return;
            }

            const response = await dispatch(registerThunk({ email, password }));
            if (response.payload?.status === 200) {
                navigate("/login");
            }

            setEmail("");
            setPassword("");
            setVerify("");
        }

    };

    const handleChange = (val, setVal) => {
        setVal(val);
    };


    return (
        <div style={{ height: "100vh"}} className="auth-page relative min-w-full flex justify-center items-center flex-col shadow-lg">
            <Alert show={show} errorMessage={errorMessage} />
            <div className=" flex bg-white px-12 py-20 rounded-lg">
                <div className="mr-20">
                    <img src={registerSVG} alt="register" className="w-80 h-full my-auto" />
                </div>
                <div className=" w-80">
                    <h2 className="mb-4 font-semibold text-2xl text-teal-950">Register</h2>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block text-sm mb-1 text-slate-500">Email</label>
                            <input type="email" placeholder="Enter email" name="email" className="text-teal-950 px-4 py-2 rounded-md border w-full border-gray-600 outline-0"
                                value={email} onChange={e => handleChange(e.target.value, setEmail)} required />
                        </div>

                        <div className="mb-3">
                            <label className="block text-sm mb-1 text-slate-500">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="text-teal-950 px-4 py-2 rounded-md border w-full border-gray-600 outline-0"
                                    value={password} onChange={e => handleChange(e.target.value, setPassword)} required />
                                <span className="absolute top-1/2 right-2 text-xl text-teal-800 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="block text-sm mb-1 text-slate-500">Verify Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Verify Password" name="password" className="text-teal-950 px-4 py-2 rounded-md border w-full border-gray-600 outline-0"
                                    value={verifyPassword} onChange={e => handleChange(e.target.value, setVerify)} required />
                                <span className="absolute top-1/2 right-2 text-xl text-teal-800 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </span>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link className="text-sm text-teal-900" to={"/login"}>Go to login page <AiOutlineArrowRight className="inline" /></Link>
                        </div>
                        {/* submit button */}
                        <div className="text-center mt-8">
                            <button type="submit" className="text-white bg-teal-900 px-8 text-sm py-2 rounded hover:bg-teal-950">
                                <span className="d-inline">Register</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}