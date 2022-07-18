import classes from './Messages.module.css'
import React from 'react'
import Message from './Massege/Message'

const Messages = (props) => {
    return (
        <div className={classes.Messages}>
            {props.message.map(e => <Message text={e.text} />)}
        </div>
    )
}

export default Messages