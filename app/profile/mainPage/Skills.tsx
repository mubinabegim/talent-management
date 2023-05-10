
import { homeStyles, profileStyles } from '@/styles';
import React, { FC } from 'react';
import ProgressBar from '../components/ProgressBar';

const Skills: FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div className='w-1/3'>
                <div className={`${profileStyles.skillsCard} mb-2`}>
                    <div className="flex items-center gap-3">
                        <div className='w-4/12'>
                            <img width="100%" src="/images/reactIcon.png" alt="user" />
                        </div>
                        <p>ReactJs</p>
                    </div>
                    <ProgressBar percentage={80} classes={"h-5"} />
                </div>
                <div className={profileStyles.skillsCard}>
                    <div className="flex items-center gap-3">
                        <div className='w-4/12'>
                            <img width="100%" src="/images/jsIcon.png" alt="user" />
                        </div>
                        <p>NodeJss</p>
                    </div>
                    <ProgressBar percentage={70} classes={"h-5"} />
                </div>
            </div>
            <div className='w-1/3'>
                <div className={`${profileStyles.skillsCard} mb-2`}>
                    <div className="flex items-center gap-3">
                        <div className='w-4/12'>
                            <img width="100%" src="/images/android.png" alt="user" />
                        </div>
                        <p>Android</p>
                    </div>
                    <ProgressBar percentage={20} classes={"h-5"} />
                </div>
                <div className={profileStyles.skillsCard}>
                    <div className="flex items-center gap-3">
                        <div className='w-4/12'>
                            <img width="100%" src="/images/python.png" alt="user" />
                        </div>
                        <p>Python</p>
                    </div>
                    <ProgressBar percentage={90} classes={"h-5"} />
                </div>
            </div>
        </div >
    )
}

export default Skills;