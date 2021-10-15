import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css'
import logo from '../public/images/logo.svg'

function Navbar() {
    return (
        <div>
            <header className={`${styles.header}`}>
                <nav className='flex flex-jc-sb flex-ai-c pad pad-lr'>

                    <div className={`${styles.header__logo}`}>
                        <Image src={logo} alt='logo' layout='fill' />
                    </div>

                    <ul className={`${styles['header__links-primary']}  hide-for-mobile`}>
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


                    <div className={`${styles.header__toggle} hide-for-desktop`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='hide-for-mobile'>
                        <Link href='/'><a className={`cto`}>Get Started</a></Link>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Navbar
