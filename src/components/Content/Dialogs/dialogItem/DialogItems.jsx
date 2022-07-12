import classes from './DialogItem.module.css'
import React from 'react'
import Dialog from './Dialog/Dialog'

const DialogItem = (props) => {
    return (
        <div className={classes.Item}>
            <Dialog name="Kirill" />
            <Dialog name="Maxim" />
            <Dialog name="Anya" />
            <Dialog name="Michail" />
            <Dialog name="Olga" />
            <Dialog name="Stes" />
        </div>
    )
}

export default DialogItem