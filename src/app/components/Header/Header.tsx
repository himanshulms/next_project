"use client"

import Search from '@/app/components/Search';
import Profile from '@/app/components/Dropdown/Profile';
import ProfileImage from '@/app/assets/images/profile.png'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/assets/images/logo.png'
import HamburgerIcon from '@/app/assets/images/svg/hamburgerIcon.svg'
import SearchIcon from '@/app/assets/images/svg/search.svg'
import { useState } from 'react';

const Header = () => {
    const [showSearch, setShowSearch] = useState(true);
    const toggleSearch = () => {
        setShowSearch(!showSearch); // Toggle showSearch state
    };

    return (
        <>
            <div className="navbar bg-base-content lg:hidden px-5 py-0">
                <div className="navbar-start">
                    <Link href="/">
                        {/* <Image src={Logo} alt="logo" className='text-center w-10' /> */}
                    </Link>
                </div>


                <div className="navbar-end gap-4 ">
                    <Profile
                        profileImage={ProfileImage}
                    />

                    <Image src={SearchIcon} alt='search' className='cursor-pointer' onClick={toggleSearch} />

                    <div className="dropdown">
                        <label htmlFor="my-drawer" className="p-4 drawer-button ">
                            <Image src={HamburgerIcon} alt="icon" />
                        </label>
                    </div>
                </div>
            </div>
            {!showSearch && <div className='lg:hidden block bg-gray85 px-5 py-2 shadow'>
                <Search />
            </div>}


            <div className='hidden lg:flex flex-wrap justify-between bg-gray85 px-5 py-2 sticky top-0'>
                <Search />
                <Profile
                    title="Hello! Jerry Dansereau"
                    profileImage={ProfileImage}
                    position="Manager"
                />
            </div>
        </>
    );
};

export default Header;