import React from 'react'
import classes from './Main.module.css';
import About from './About/About';
import Posts from './Posts/Posts';

const Main = (props) => {
    return <main className={classes.Main}>
        <About />
        <Posts post={props.post} />
    </main>
}

export default Main;