import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DestinationCard = ({singlePlace}) => {
    const {id, name, description,imageLink} = singlePlace ;
    return (
        <div>
            <div className="hero ">
                <div className="hero-content grid md:grid-cols-3 gap-5">
                    <img src={imageLink} className="max-w-sm h-72 w-full rounded-lg shadow-2xl" />
                    <div className='md:col-span-2'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <Link to={`/destination/${id}`} className='btn btn-warning normal-case'>Booking <FaArrowRight className='ml-2'/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;