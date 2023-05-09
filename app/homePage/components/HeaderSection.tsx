import Image from 'next/image'
import React from 'react';
import { homeStyles } from '@/styles';
const HeaderSection = () => {
return(
    <header className={`${homeStyles.header} container`}>
        <div className="w-1/2">
            <h1 className={homeStyles.header__heading}>Elevate Your Talent Game:</h1>
            <p className={homeStyles.header__text}>Discover Innovative Talent Management Solutions</p>
        </div>
        <div className="w-1/2">
            <img src="/images/talents2.jpg" alt="talent photo"/>
        </div>
    </header>
)
}

export default HeaderSection;