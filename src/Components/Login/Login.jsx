import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-[570px] p-10 border border-warning bg-white rounded-lg">
            <h3>Login</h3>
            <div className="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link className="underline text-error">Forgot password?</Link>
                    </label>
                </div>
                <div className="form-control">
                    <label className="flex gap-4 cursor-pointer mt-4">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Remember me</span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;