import React from 'react'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import ServicesWeOffer from '../components/ServecisWeOffer/ServecisWeOffer'
import CoreCompetencies from '../components/CoreCompetencies/CoreCompetencies'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ServicesWeOffer />
            <CoreCompetencies />
            <WhyChooseUs />
            <FeaturedProducts />
        </div>
    )
}

export default Home
