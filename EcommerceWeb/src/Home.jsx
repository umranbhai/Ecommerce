import React from 'react';
import './app.css'; // Assuming you have a CSS file for styling
import HeroSection from './components/HeroSection';
import Services from './components/services';
import Partners from './components/Partners'; // Assuming you have a Partners component
import FooterBar from './components/Footer'; // Assuming you have a FooterBar component
import FeaturService from './components/FeaturService';

function Home() {
    const data = {
        name: 'MyBrand'
    } // Replace with your brand name or dynamic data
    return (
        <div className="w-[1200px] mx-auto text-center bg-gray-100">
            <h1 className='text-3xl font-bold'>Welcome to the Home Page</h1>
            <p className='text-lg'>This is the home page of our e-commerce website.</p>
            <HeroSection myData={data} />
            <FeaturService />
            <Services />
            <Partners />
            <FooterBar />
        </div>
    );
}

export default Home;
