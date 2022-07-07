import React from 'react'
import logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.Header}>
        <img src={logo} className={classes.img} alt="logo" />
        <menu className={classes.menu}>
            <li><a className={classes.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a></li>
            <li><a className={classes.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a></li>
            <li><a className={classes.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a></li>
        </menu>
    </header>
}

export default Header;
