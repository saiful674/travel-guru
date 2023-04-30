import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContex)

    const handleCreateUser =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            
            updateUser(name)
            .then()
            .catch(error => error)

            form.reset();
        })
        .catch(error => console.log(error))
    }
    return (
        <form onSubmit={handleCreateUser} className="w-[570px] p-10 border border-warning bg-white rounded-lg text-black">
        <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered"  required/>
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
        <p className='text-center'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
    </form>
    );
};

export default Register;