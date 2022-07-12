import classes from './Dialog.module.css'
import React from 'react'

const Dialog = (props) => {
    return (
        <div className="Dialog">
            <div className={classes.item}>{props.name}</div>
        </div>
    )
}

export default Dialog