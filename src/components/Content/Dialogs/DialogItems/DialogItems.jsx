import classes from './DialogItems.module.css'
import React from 'react'
import Dialog from './Dialog/Dialog'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={classes.DialogItems}>
            <NavLink to="/dialogs/1" className={classes.link}><Dialog name="Kirill" active={true} /></NavLink>
            <NavLink to="/dialogs/2" className={classes.link}><Dialog name="Maxim" /></NavLink>
            <NavLink to="/dialogs/3" className={classes.link}><Dialog name="Anya" /></NavLink>
            <NavLink to="/dialogs/4" className={classes.link}><Dialog name="Michail" /></NavLink>
            <NavLink to="/dialogs/5" className={classes.link}><Dialog name="Olga" /></NavLink>
            <NavLink to="/dialogs/6" className={classes.link}><Dialog name="Stes" /></NavLink>
        </div>
    )
}

export default DialogItem