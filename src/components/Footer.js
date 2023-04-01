import { useEffect, useState } from 'react';
import classes from '../styles/Footer.module.css';

const Footer = () => {
    let [currentTime, setCurrentTime] = useState();

    const updateTime = () => {
        const newTime = new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }
        );
        setCurrentTime(newTime)
    }

    useEffect(_ => {
        updateTime();

        setInterval(updateTime, 3600);
    }, []);


    return (
        <div className={classes.footer}>
            <span>All rights reserved, Wojciech Wojnar, 2023</span>
            <span className={classes.clock}>
                Time: {currentTime}
            </span>
        </div>
    )
}
export default Footer;