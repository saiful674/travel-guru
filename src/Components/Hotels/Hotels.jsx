import React from 'react';
import hotel1 from '../../assets/images/hotels/Rectangle 26.png'
import hotel2 from '../../assets/images/hotels/Rectangle 27.png'
import hotel3 from '../../assets/images/hotels/Rectangle 28.png'
import { FaStar } from 'react-icons/fa';
const Hotels = () => {
    return (
        <div className='text-left mt-36 mb-10'>
            <p>252 stays Apr 13-17 3 guests</p>
            <h4 className='text-2xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Stay in Cox's Bazar</h4>
            <div className="grid md:grid-cols-2 gap-5">
               <div>
               <div className='grid md:grid-cols-2 gap-4 mb-5'>
                    <img src={hotel1} alt="" />
                    <div className="text">
                        <h6 className=' font-bold text-xl'>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p className='my-3'>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'><FaStar className='text-warning'></FaStar> <p>4.9 (20)</p></div>
                            <p>$34/per night</p>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 mb-5'>
                    <img src={hotel2} alt="" />
                    <div className="text">
                        <h6 className=' font-bold text-xl'>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p className='my-3'>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'><FaStar className='text-warning'></FaStar> <p>4.9 (20)</p></div>
                            <p>$34/per night</p>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 mb-5'>
                    <img src={hotel3} alt="" />
                    <div className="text">
                        <h6 className=' font-bold text-xl'>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p className='my-3'>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <div className='flex justify-between mt-4'>
                            <div className='flex'><FaStar className='text-warning'></FaStar> <p>4.9 (20)</p></div>
                            <p>$34/per night</p>
                        </div>
                    </div>
                </div>
               </div>
                <div className="map">
                <iframe className='w-full h-screen rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24933407057!2d91.9204992358945!3d21.45103776170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1682899313051!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Hotels;