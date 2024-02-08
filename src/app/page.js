'use client'
import { useState } from "react";
import NavBar from "../component/NavBar/NavBar";
import NavBarMobile from "../component/NavBarTablet/NavBarTablet"
import Wave from "../component/WaveCanavas/Wave";
import styles from "./page.module.scss";
import About from "../pages/1-About/About";
import Courses from "../pages/2-Courses/Courses";
import Projects from "../pages/3-Projects/Projects";
import Contact from "../pages/4-Contact/Contact";
import Cover from "../pages/0-Cover/Cover";
import MenuToClose from "../component/MenuToClose/MenuToClose";

export default function Home() {

  // to change between bages
  const [state, setState] = useState(1);

  // to apeare navbar in mobile screen
  const [show ,setShow] =useState(false)
  const toggleClose = () => {
    setShow(prev => (show ? false : true ))
}

  return (
    <div className={styles.main}>
      <Wave />
      <MenuToClose show={show} setShow={setShow} toggleClose={toggleClose}/>
      <div className={styles.mainPage}>

        <div className={styles.cover}>
          <NavBarMobile state={state} setState={setState} show={show} toggleClose={toggleClose}/>
          <NavBar state={state} setState={setState} />
          <Cover />
        </div>

        <div className={styles.pages}>

          <About state={state} />

          <Courses state={state} />

          <Projects state={state} />

          <Contact state={state} />

        </div>
      </div>

    </div>
  )
}
