import React from 'react';
import { homeStyles } from '@/styles';
import { FaEnvelope,  FaPhone, FaUser } from 'react-icons/fa';
import { Button } from '@/components';

const WorkWithUs = () => {
return(
    <div className={homeStyles.WorkWithUs}>
        <h2 className={homeStyles.secondGradeHeading}>Work with us</h2>
        <div className='flex flex-col items-center justify-center gap-2 mt-6 mb-10'>
            <div className={homeStyles.inputGroup}>
                <div className="forIcon">
                    <FaUser className='text-3xl'/>
                </div>
                <input className='outline-0 w-full min-w-[250px]' type="text" />
            </div>
            <div className={homeStyles.inputGroup}>
                <div className="forIcon">
                    <FaEnvelope className='text-3xl'/>
                </div>
                <input className='outline-0 w-full min-w-[250px]' type="text" />
            </div>
            <div className={`${homeStyles.inputGroup} mb-10`}>
                <div className="forIcon">
                    <FaPhone className='text-3xl'/>
                </div>
                <input className='outline-0 w-full min-w-[250px]' type="text" />
            </div>
           <Button title='Send'/>

        </div>
    </div>
)
}

export default WorkWithUs