import React from 'react';
import { homeStyles } from '@/styles';

const GetHiredSection = () => {
return(
    <div className={`${homeStyles.GetHiredSection} container`}>
        <h2 className={homeStyles.secondGradeHeading}>Pass the test and get hired</h2>
        <div className={homeStyles.testsContainer}>
            <div className={homeStyles.item}>
                <p>Technical skill tests</p>
            </div>
            <div className={homeStyles.item}>
                <p>Coding challenges</p>
            </div>
            <div className={homeStyles.item}>
                <p>Logic and reasoning tests</p>
            </div>
            <div className={homeStyles.item}>
                <p>Communication skills tests</p>
            </div>
            <div className={homeStyles.item}>
                <p>Cybersecurity tests</p>
            </div>
            <div className={homeStyles.item}>
                <p>Project management tests</p>
            </div>

        </div>
    </div>
)
}

export default GetHiredSection;