'use client'
import React from 'react';
import "./NavBarTablet.scss"
import { FaList, FaNewspaper, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import Link from 'next/link';
import Logo from '../LOGO-T/Logo';
import DarkModeToggle from '../darkMode-Next/DarkModeToggle';

const NavBar = ({ setState, state ,show , toggleClose}) => {
    return (
        <div className={`BarTablet ${show? "see" : ""}`}>
            <div className='sideBar-above'>
                <Link href="#home" onClick={() => {setState(0); toggleClose()}}>
                    <Logo />
                </Link>
                <DarkModeToggle />
            </div>

            <div className='sideBar-down'>
                <div className='links'>
                    <Link href="#about" onClick={() => {setState(1); toggleClose()}}
                        className={`${state === 1 ? "active" : "noActive"}`}>
                        <FaRegUser className='nav-icon' />
                        <h4>about</h4>
                    </Link>

                    <Link href="#courses" onClick={() => {setState(2); toggleClose()}}
                        className={`${state === 2 ? "active" : "noActive"}`}>
                        <FaList className='nav-icon' />
                        <h4>resume</h4>
                    </Link>

                    <Link href="#project" onClick={() => {setState(3); toggleClose()}}
                        className={`${state === 3 ? "active" : "noActive"}`}>
                        <FaRegFolderOpen className='nav-icon' />
                        <h4>portfolio</h4>
                    </Link>

                    <Link href="#contact" onClick={() => {setState(4); toggleClose()}}
                        className={`${state === 4 ? "active" : "noActive"}`}>
                        <BsEnvelope className='nav-icon' />
                        <h4>contact</h4>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default NavBar;
