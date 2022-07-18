import React from 'react'
import classes from './WorkItem.module.css';

const WorkItem = (props) => {
    return <div className={classes.Item}>
        <img src={props.img} alt="work" />
    </div>
}

export default WorkItem;