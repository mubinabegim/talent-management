import React from 'react';
import { homeStyles } from '@/styles';


const CompanyLogos = () => {
return(
<div className='border-y-2 border-gray-400'>
<div className={`${homeStyles.logosContainer}`}>
    <div className='w-32'>
        <img src="/images/letter-b.png" alt="B logo" className='cursor-pointer'/>
    </div>
    <div className='w-32'>
        <img src="/images/facebook.png" alt="Facebook logo" className='cursor-pointer'/>
    </div>
    <div>
        <p className='text-2xl tracking-wide font-light text-indigo-900'>Company logos</p>
    </div>
    <div className='w-32'>
        <img src="/images/teamwork.png" alt="Multi hands logo" className='cursor-pointer'/>
    </div>
    <div className='w-32'>
        <img src="/images/letter-m.png" alt="M logo" className='cursor-pointer'/>
    </div>
  </div>
</div>
)
}

export default CompanyLogos;