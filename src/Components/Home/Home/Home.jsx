import React from 'react';
import { Link } from 'react-router-dom';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import sundorbon_img from '../../../assets/images/slider/sundorbon.png'
import sajek_img from '../../../assets/images/slider/Sajek.png'
import sreemongil_img from '../../../assets/images/slider/Sreemongol.png'
import { FaArrowRight } from 'react-icons/fa';
const Home = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    return (
        <div className='grid md:grid-cols-2 gap-5'>
            <div className="banner-text">
                <h1 className='text-7xl mb-24' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Lets Start Travel </h1>
                <Link to='/destination' className='btn btn-warning normal-case'>See Destination <FaArrowRight className='ml-2'/></Link>
            </div>
            <div className="banner-slider">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1 relative ">
                        <img className='w-full md:w-72' src={sajek_img} alt="" />
                        <div className='rounded-2xl absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-5 text-4xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sajek</h5>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1 relative ">
                        <img className='w-full md:w-72' src={sundorbon_img} alt="" />
                        <div className='rounded-2xl absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-5 text-4xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sundorbon</h5>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1 relative ">
                        <img className='w-full md:w-72' src={sreemongil_img} alt="" />
                        <div className='rounded-2xl absolute  top-0 left-0 w-full h-full flex items-end' style={{ background: 'linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)' }}>
                            <h5 className='mb-5 ml-5 text-4xl' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Sreemongol</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;