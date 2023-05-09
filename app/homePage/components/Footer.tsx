import React from 'react';
import { homeStyles } from '@/styles';
import Link from 'next/link';
import { FaFacebook, FaFacebookF, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={homeStyles.footer}>
            <div className='container flex justify-between items-center'>
            <div>
                <div className={`uppercase  font-bold text-2xl pb-2`}>
                    <p>Talent</p>
                    <p>management</p>
                </div>
                <span>Address</span>
            </div>
            <ul>
                <li>
                    <Link href='/about-us'>About us</Link>
                </li>
                <li className='my-2'>
                    <Link href='/companies'> For Companies</Link>
                </li>
                <li>
                    <Link href='/'>For individuals</Link>
                </li>
            </ul>
            <div className='flex gap-1'>
                <div className='rounded-full border-2 border-gray-900 p-2 cursor-pointer'>
                    <FaTwitter className='text-2xl'/>
                </div>
                <div className='rounded-full border-2 border-gray-900 p-2 cursor-pointer'>
                    <FaFacebookF  className='text-2xl'/>
                </div>
                <div className='rounded-full border-2 border-gray-900 p-2 cursor-pointer'>
                    <FaInstagram  className='text-2xl'/>
                </div>
                <div className='rounded-full border-2 border-gray-900 p-2 cursor-pointer'>
                    <FaTelegram  className='text-2xl'/>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer