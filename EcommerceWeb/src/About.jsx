import React from 'react';
import './app.css'; // Assuming you have a CSS file for styling
import HeroSection from './components/HeroSection';

function About({ myData }) {

    myData = {
        name: 'My New Brand'
    }
    return (
        <>
            <div className='w-[1200px] mx-auto text-center bg-gray-100'>
                <h2 className='text-3xl font-bold'>About Us</h2>
                <p className='text-lg w-1/2 mx-auto'>
                    We are a leading e-commerce platform dedicated to providing the best online shopping experience. Our mission is to connect customers with high-quality products at competitive prices.
                </p>
                <HeroSection myData={myData} />
            </div>

        </>
    );
}

export default About;