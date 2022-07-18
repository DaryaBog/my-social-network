import classes from './DialogItems.module.css'
import React from 'react'
import Dialog from './Dialog/Dialog'

const DialogItem = (props) => {
    return (
        <div className={classes.DialogItems}>
            {props.dialog.map(e => <Dialog name={e.name} active={e.active} id={e.id} />)}
        </div>
    )
}

export default DialogItem