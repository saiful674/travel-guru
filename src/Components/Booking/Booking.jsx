import React from 'react';
import { Link, useLoaderData, } from 'react-router-dom';

const Booking = () => {
    const { id, name, description } = useLoaderData();
    const divisions = ["Dhaka Division", "Chittagong Division", "Rajshahi Division", "Khulna Division", "Barisal Division", "Sylhet Division", "Rangpur Division", "Mymensingh Division"];

    return (
        <div className='grid md:grid-cols-2 gap-5 md:gap-48'>
            <div className="destination-text">
                <h1 className='text-7xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>{name}</h1>
                <p>{description}</p>
            </div>
            <form className="destination-date bg-white px-6 py-5 rounded-lg">
                <div className="form-control">
                    <span className="label-text mb-2">Origin</span>
                    <select className="select select-bordered text-black" required>
                        <option disabled selected>Select your place</option>
                        {
                            divisions.map((division, indx) => <option
                                key={indx}
                            >{division}</option>)
                        }
                    </select>
                </div>
                <div className="form-control mt-5">
                    <span className="label-text mb-2">Destination</span>
                    <select className="select select-bordered text-black" required>
                        <option disabled selected>{name}</option>
                    </select>
                </div>
                <div className="form-control mt-5 text-black grid grid-cols-2 gap-4">
                    <div>
                        <p className="label-text mb-2">From</p>
                        <input className='input input-bordered w-full' type="date" required/>
                    </div>
                    <div>
                        <p className="label-text mb-2">To</p>
                        <input className='input input-bordered w-full' type="date" required />
                    </div>
                </div>
                <button className='w-full'><Link className='btn btn-warning normal-case mt-7 w-full'>Start Booking</Link></button>
            </form>
        </div>
    );
};

export default Booking;