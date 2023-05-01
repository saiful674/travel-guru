import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContex)
    const [error, setError] = useState(null)
    const navagate = useNavigate();


    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setError(null)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                toast.success('Successfully Register!')

                setTimeout(() => navagate('/'), 2000)

                updateUser(name)
                    .then()
                    .catch(error => console.log(error))
                form.reset();
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }
    return (
        <form onSubmit={handleCreateUser} className="w-full md:w-[570px] mt-32 mb-10 p-10 border border-warning bg-white rounded-lg text-black">
            <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" required />
                    <span className="label-text">Accept terms & conditions</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
                <button className="btn btn-warning">Create an account</button>
            </div>
            {error && <p className='text-center text-error mb-2'>{error}</p>}
            <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
        </form>
    );
};

export default Register;