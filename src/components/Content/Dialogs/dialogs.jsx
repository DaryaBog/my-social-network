import classes from './dialogs.module.css'
import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import Messages from './Messages/Messages'

const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <DialogItems />
            <Messages />
        </div>
    )
}

export default Dialogs