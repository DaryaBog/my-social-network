import React from 'react'
import classes from './About.module.css';
import Galery from './Galery/Galery';
const About = () => {
    return <section className={classes.About}>
        <div className={classes.Photo}>
            {/* <img></img> */}
        </div>
        <div className={classes.Info}>
            <h1 className={classes.Name}>Богданова Дарья Игоревна</h1>
            <div className={classes.MyWork}>Frontend-developer</div>
            <Galery />
        </div>
    </section>
}

export default About;