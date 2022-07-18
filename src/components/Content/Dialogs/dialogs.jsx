import classes from './dialogs.module.css'
import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    return (
        <div className={classes.Dialogs}>
            <DialogItems dialog={props.dialog} />
            <Messages message={props.message} />
        </div>
    )
}

export default Dialogs