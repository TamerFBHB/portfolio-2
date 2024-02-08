'use client'
import React from 'react';
import "./NavBar.scss"
import { FaList, FaNewspaper, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import Link from 'next/link';
import Logo from '../LOGO-T/Logo';
import DarkModeToggle from '../darkMode-Next/DarkModeToggle';

const NavBar = ({  setState, state }) => {
    return (
        <div className={`Bar `}>
            <div className='sideBar-above'>
                <Logo />
                <DarkModeToggle />
            </div>

            <div className='sideBar-down'>
                <div className='links'>
                        <Link href="" onClick={() => setState(1)}
                        className={ `${state === 1 ? "active" : "noActive"}`}>
                            <FaRegUser className='nav-icon' />
                            <h4>about</h4>
                        </Link>
                    
                        <Link href="" onClick={() => setState(2)}
                        className={`${state === 2 ? "active" : "noActive"}`} >
                            <FaList className='nav-icon' />
                            <h4>resume</h4>
                        </Link>
                    
                        <Link href=""  onClick={() => setState(3)}
                        className={`${state === 3 ? "active" : "noActive"}`} >
                            <FaRegFolderOpen className='nav-icon' />
                            <h4>portfolio</h4>
                        </Link>
                    
                        <Link href=""  onClick={() => setState(4)}
                        className={`${state === 4 ? "active" : "noActive"}`} >
                            <BsEnvelope className='nav-icon' />
                            <h4>contact</h4>
                        </Link>

                </div>
            </div>
        </div>
    );
}

export default NavBar;
