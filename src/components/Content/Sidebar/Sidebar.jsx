import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return <aside className={classes.Sidebar}>
        <p><NavLink className="main" to="/main" > Профиль</NavLink></p>
        <p><NavLink className="feed" to="/feed" > Новости</NavLink></p>
        <p><NavLink className="dialogs" to="/dialogs"> Сообщения</NavLink></p>
        <p><NavLink className="friends" to="/friends" > Друзья</NavLink></p>
    </aside>
}

export default Sidebar;
