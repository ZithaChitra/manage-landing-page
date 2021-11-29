import React from 'react'
import Image from 'next/image'
import {useState} from 'react'

import styles from '../styles/components/Testmons.module.css'


// in a perfect world, with loads of testimonials, it wouldn't be a bad idea to
// keep the data in seperate file or/and maybe a database

const testmonials = [
    {
        name: "Ali Bravo",
        avatar: '/../public/images/avatar-ali.png',
        testmon: `
                Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!
            `
    },
    {
        name: "Richard Watts",
        avatar: "/../public/images/avatar-richard.png",
        testmon: `
                Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!
            `
    },
    {
        name: "Shanai Gough",
        avatar: "/../public/images/avatar-shanai.png",
        testmon: `
                Their software allows us to track, manage and collaborate on our projects
                from anywhere. It keeps the whole team in-sync without being intrusive.
            `
    },
    {
        name: "Anisha Li",
        avatar: "/../public/images/avatar-anisha.png",
        testmon: `
                Manage has supercharged our team’s workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated.
            `
    },
]


// And remember to always lift state up kids !
// ok maybe not now 😇


const Testmons = () => {
    const [active, setActive] = useState(0)

    return (
        <div className={`{styles.home}`}>
            <div className={`${styles['home__tests-peps']}`}>

            <div className='flex flex-ai-c flex-jc-c'>
                <div className={`${styles['home__tests-peps-img']} img`}>
                <Image src={testmonials[0].avatar} alt='' layout='fill'/>
                </div>
            </div>
            
            <h4>{testmonials[0].name}</h4>
            <p>{testmonials[0].testmon}</p>

            </div>

            <div className={`${styles['home__tests-nav']}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Testmons