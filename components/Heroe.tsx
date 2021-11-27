import React from 'react'
import styles from '../styles/components/Heroe.module.css'
import Link from 'next/link'
import Image from 'next/image'
import charts from '../public/images/illustration-intro.svg'

const Heroe = () => {
    return (
        <div className={`${styles.heroe}`}>

            
            <div className={`${styles.heroe__image}`}>
                <div className={`${styles['heroe__image-wrapper']} img`}>
                    <Image src={charts} alt='' layout='fill'/>                 
                </div>
            </div>

            <div className={`${styles.heroe__text}`}>
                <h1>
                    Bring everyone 
                    together to build
                    better products.
                </h1>

                <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>


                <div className={`${styles.heroe__cto}`}>
                    <Link href='/'><a className='cta'>Get Started</a></Link>
                </div>
            </div>

        </div>
    )
}

export default Heroe
