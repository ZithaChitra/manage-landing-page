import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Heroe.module.css'
import heroe_image from '../public/images/illustration-intro.svg'


function Heroe() {
    return (
        <div className={`${styles.heroe} pad pad-lr`}>

            <div className={`${styles.heroe__image}`}>

            </div>

            <div className={`${styles.heroe__text}`}>
                <h1>
                    Bring everyone <br />
                    together to build  <br />
                    better products.
                </h1>

                <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>

                <Link href='/'><a className='cto'>Get Started</a></Link>
            </div>

        </div>
    )
}

export default Heroe
