import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DestinationCard from '../Card/DestinationCard/DestinationCard';

const Destination = () => {
    const destination = useLoaderData();
    console.log(destination)
    return (
        <div className='mt-24'>
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