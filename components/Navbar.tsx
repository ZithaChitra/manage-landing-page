import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Navbar.module.css'

import logo from '../public/images/logo.svg'

const Navbar = () => {
    return (
        <div className='container'>
            <header className={`${styles.nav}`}>
                <nav className='flex flex-jc-sb flex-ai-c'>

                    <div className={`${styles.nav__logo} img`}>
                        <Image src={logo} alt='logo' layout='fill' />
                    </div>

                    <ul className={`${styles['nav__links-primary']}  hide-for-tablet`}>
                        <li>
                            <Link href='/'><a>Pricing</a></Link>
                        </li>
                        <li>
                            <Link href='/'><a>Product</a></Link>
                        </li>
                        <li>
                            <Link href='/'><a>About Us</a></Link>
                        </li>
                        <li>
                            <Link href='/'><a>Careers</a></Link>
                        </li>
                        <li>
                            <Link href='/'><a>Community</a></Link>
                        </li>
                    </ul>


                    <div className={`${styles.nav__toggle} hide-for-desktop`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='hide-for-tablet'>
                        <Link href='/'><a className={`cta`}>Get Started</a></Link>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Navbar
