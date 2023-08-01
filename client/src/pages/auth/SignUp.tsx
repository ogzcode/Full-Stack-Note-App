import { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be longer than 3 characters!')
        .max(50, 'Too Long!')
        .required('Username is required.'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required.'),
    password: Yup.string()
        .min(6, 'Password must be longer than 8 characters!')
        .max(50, 'Too Long!')
        .required('Password is required.'),
});


export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.05)" }} className='z-10 bg-white rounded-2xl p-8 w-[420px] flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[#4E4E4E] font-lato-bold text-4xl'>Sign Up</h1>
            <p className='text-[#787878] font-lato-light text-base'>Take Notes, Keep Your Memories Forever</p>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='py-6 w-full'>
                        <div className="flex flex-col mb-4">
                            <label className='text-sm font-lato-light text-[#787878] mb-1' htmlFor="email">Username</label>
                            <Field
                                className={`rounded border border-[#ECECEC] outline-0 mb-2 h-[36px] pl-2 
                                text-[#4E4E4E] ${errors.username && touched.username && 'border-red-500'}`}
                                name="username" type="text"
                            />
                            {errors.username && touched.username ? (<div className='text-xs text-red-500'>{errors.username}</div>) : null}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='text-sm font-lato-light text-[#787878] mb-1' htmlFor="email">Email</label>
                            <Field
                                className={`rounded border border-[#ECECEC] outline-0 mb-2 h-[36px] pl-2 
                                text-[#4E4E4E] ${errors.email && touched.email && 'border-red-500'}`}
                                name="email" type="email"
                            />
                            {errors.email && touched.email ? (<div className='text-xs text-red-500'>{errors.email}</div>) : null}
                        </div>
                        <div className="flex flex-col">
                            <label className='text-sm font-lato-light text-[#787878] mb-1' htmlFor="password">Password</label>
                            <div className='relative'>
                                <Field className={`rounded border border-[#ECECEC] outline-0 mb-2 h-[36px] w-full pl-2 
                                text-[#4E4E4E] ${errors.password && touched.password && 'border-red-500'}`}
                                    name="password" type={showPassword ? 'text' : 'password'}
                                />
                                <span className={`absolute cursor-pointer right-4 top-1/3 -translate-y-1/4 text-xs text-[#787878] ${showPassword && 'line-through'}`}
                                    onClick={() => setShowPassword(!showPassword)}
                                >hide</span>
                            </div>
                            {errors.password && touched.password ? (<div className='text-xs text-red-500'>{errors.password}</div>) : null}
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='login__btn mt-8 w-1/2 bg-[#FFB636] rounded h-[36px] text-white'>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}