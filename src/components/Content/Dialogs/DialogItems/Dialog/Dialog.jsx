import classes from './Dialog.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    const link = "/dialogs/" + props.to
    return (
        <div className="Dialog">
            <NavLink to={link} className={props.active ? classes.item + ' ' + classes.active : classes.item}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog