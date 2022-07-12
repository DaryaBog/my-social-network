import classes from './Dialog.module.css'
import React from 'react'

const Dialog = (props) => {

    return (
        <div className="Dialog">
            <div className={props.active ? classes.item + ' ' + classes.active : classes.item}>{props.name}</div>
        </div>
    )
}

export default Dialog