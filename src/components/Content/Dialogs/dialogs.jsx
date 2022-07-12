import classes from './dialogs.module.css'
import React from 'react'
import DialogItem from './dialogItem/DialogItems'
import Messages from './Messages/Messages'

const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <DialogItem />
            <Messages />
        </div>
    )
}

export default Dialogs