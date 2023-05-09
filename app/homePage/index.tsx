import React from 'react';
import { HeaderSection, Line, GetHiredSection, CompanyLogos, HiringSection, WorkWithUs, Footer } from './components'
const HomePage = () => {
    return (
        <>
            <HeaderSection />
            <Line />
            <GetHiredSection />
            <CompanyLogos />
            <Line />
            <HiringSection />
            <Line />
            <WorkWithUs />
            <Footer />
        </>
    )
}

export default HomePage;