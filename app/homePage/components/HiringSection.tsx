import React from 'react';
import { homeStyles } from '@/styles';
import { FaAndroid, FaApple, FaJava, FaLaptop, FaLightbulb, FaNodeJs, FaPython, FaReact, FaRobot, FaSearch } from 'react-icons/fa';

const HiringSection = () => {
    return (
        <div className="mx-auto container">
            <h2 className={homeStyles.secondGradeHeading}>Hire</h2>
            <div className={homeStyles.forSearch}>
                <div className={homeStyles.searchIcon}>
                    <FaSearch className='text-2xl' />
                </div>
                <input className='outline-0 w-full' type='search' placeholder='Search skill' />
            </div>
            <p className='mb-6'>or Choose...</p>
            <div className="grid grid-cols-4 gap-4">
                <div className={homeStyles.skill}>
                    <div>
                        <FaReact className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaAndroid className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaJava className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaLaptop className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaNodeJs className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaPython className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaApple className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
                <div className={homeStyles.skill}>
                    <div>
                        <FaLightbulb className='text-5xl' />
                    </div>
                    <span>Skill</span>
                </div>
            </div>
        </div>
    )
}

export default HiringSection;