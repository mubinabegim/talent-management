import React, { FC } from 'react';
import { homeStyles } from '@/styles';
const Navbar: FC<any> = () => {
    return (
        <nav className={homeStyles.nav}>
            <div className="logo">
                <p className={homeStyles.logoText}>Talent management</p>
            </div>
            <ul className={homeStyles.nav__list}>
                <li className={homeStyles.nav__item}>
                    <a href="#" className={homeStyles.nav__link}>About us</a>
                </li>
                <li className={homeStyles.nav__item}>
                    <a href="#" className={homeStyles.nav__link}>For companies</a>
                </li>
                <li className={homeStyles.nav__item}>
                    <a href="#" className={homeStyles.nav__link}>For individuals</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;