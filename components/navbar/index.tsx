import React, { FC } from 'react';
import { homeStyles } from '@/styles';
import Link from 'next/link';
import { FaUserLock } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar: FC<any> = () => {
    const router = useRouter();
    return (
        <nav className={`${homeStyles.nav}`}>
            <div className="logo">
                <Link href="/" className={homeStyles.logoText}>Talent management</Link>
            </div>
            <ul className={homeStyles.nav__list}>
                <li className={homeStyles.nav__item}>
                    <Link className={homeStyles.nav__link} href="/about-us">About us</Link>
                </li>
                <li className={homeStyles.nav__item}>
                    <div className={homeStyles.companies}>
                        <span className={homeStyles.nav__link} >For companies</span>
                        <div className={homeStyles.dropdown}>
                            <div>
                                <Link href="/services">Explore Services</Link>
                            </div>
                            <div>
                                <Link href="/freelancer">Hire a freelancer</Link>
                            </div>
                            <div>
                                <Link href="/partner">Partner with us</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={homeStyles.nav__item}>
                    <div className={homeStyles.companies}>
                        <span className={homeStyles.nav__link} >For individuals</span>
                        <div className={homeStyles.dropdown}>
                            <div>
                                <Link href="/opportunities">Explore opportunities</Link>
                            </div>
                            <div>
                                <Link href="/job">Find a job</Link>
                            </div>
                            <div>
                                <Link href="/partner">Partner with us</Link>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <Link href="/signup/register" className={homeStyles.nav__link_icon}>
                        <FaUserLock  className={homeStyles.nav__icon} />
                        Log in</Link>
                </li>
                <li>
                    <button className={homeStyles.nav__link_icon}>
                        <FaGlobe className={homeStyles.nav__icon} />
                        <span>Ru/Uz</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;