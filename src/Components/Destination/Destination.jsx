import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from '../Card/DestinationCard/DestinationCard';

const Destination = () => {
    const destination = useLoaderData();
    console.log(destination)
    return (
        <div className='mt-32'>
            <h1 className='text-6xl mb-5 text-center' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Our Travel Destination</h1>
           {
            destination.map(singlePlace => <DestinationCard
            key={singlePlace.id}
            singlePlace={singlePlace}
            ></DestinationCard>)
           }
        </div>
    );
};

export default Destination;