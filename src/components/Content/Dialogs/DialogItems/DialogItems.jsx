import classes from './DialogItems.module.css'
import React from 'react'
import Dialog from './Dialog/Dialog'

const DialogItem = (props) => {
    return (
        <div className={classes.DialogItems}>
            <Dialog name="Kirill" active={true} to={1} />
            <Dialog name="Maxim" to={2} />
            <Dialog name="Anya" to={3} />
            <Dialog name="Michail" to={4} />
            <Dialog name="Olga" to={5} />
            <Dialog name="Stes" to={6} />
        </div>
    )
}

export default DialogItem