import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../styles/TopNav.module.css';
import { currencies, languages } from '../utils/constants';



const TopNav = () => {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [currentCur, setCurrentCur] = useState(currencies[0]);
    return (
        <div className='py-2 text-[#777] text-[11px] font-semibold tracking-wide leading-6 top-nav'>
            <div className='max-w-[1200px] mx-auto px-[10px] flex justify-between items-center'>
                <div className='hidden sm:block'>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</div>
                <div className='flex gap-[28px] items-center justify-between  w-full sm:w-auto'>
                    <div className='hidden lg:block'>
                        <ul className='flex  tracking-wide leading-4 items-center gap-6'>
                            <li>My Account</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>My Wishlist</li>
                            <li>Cart</li>
                            <li>Log In</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-1 sm:gap-4 items-center'>
                            <li className={`px-[5px] w-[80px] flex gap-[5px] items-center relative ${styles['lang-title']}`}>
                                <img src={currentLang.icon} alt="" />
                                <span>{currentLang.name}</span>
                                <MdKeyboardArrowDown />
                                <ul className={`absolute z-1 left-0 right-0 shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                    {languages.filter(item => item.id !== currentLang.id).map((item, i) => <li onClick={() => setCurrentLang(item)} className='flex gap-[5px] items-center' key={i}>
                                        <img src={item.icon} alt="" />
                                        <span>{item.name}</span>
                                    </li>)}
                                </ul>
                            </li>
                            <li className={`px-[5px] w-[80px] flex gap-[5px] items-center relative ${styles['lang-title']}`}>
                                <span>{currentCur.symbol}</span>
                                <span>{currentCur.name}</span>
                                <MdKeyboardArrowDown />
                                <ul className={`absolute z-1 left-0 right-0 shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                    {currencies.filter(item => item.id !== currentCur.id).map((item, i) => <li onClick={() => {
                                        setCurrentCur(item);
                                    }}
                                        key={i} className='flex gap-[5px] items-center' >
                                        <span>{item.symbol}</span>
                                        <span>{item.name}</span>
                                    </li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-start text-[13px]'>
                            <li className='h-[26px] w-[26px] rounded-full bg-transparent duration-500 text-[#777] hover:text-white hover:bg-[#7c4a3a] flex justify-center items-center'><FaFacebookF /></li>
                            <li className='h-[26px] w-[26px] rounded-full bg-transparent duration-500 text-[#777] hover:text-white hover:bg-[#7c4a3a] flex justify-center items-center'><FaTwitter /></li>
                            <li className='h-[26px] w-[26px] rounded-full bg-transparent duration-500 text-[#777] hover:text-white hover:bg-[#7c4a3a] flex justify-center items-center'><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default TopNav;