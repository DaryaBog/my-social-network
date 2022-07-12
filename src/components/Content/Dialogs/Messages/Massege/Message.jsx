import classes from './Message.module.css'
import React from 'react'

const Message = (props) => {
    return (
        <div className={classes.item}>{props.text}</div>
    )
}

export default Message