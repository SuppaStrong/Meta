import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider-2';
import SliderStyle1 from '../components/slider/SliderStyle1';
import FeaturedGames from '../components/layouts/home-2/FeaturedGames';


const Games = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderStyle1 data={heroSliderData} />   
            <FeaturedGames  />
            <Footer />
        </div>
    );
}

export default Games;
