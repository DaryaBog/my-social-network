import React from 'react'
import classes from './Galery.module.css';
import myWork from './myWork/myWork.png';
import myWork1 from './myWork/myWork1.png';
import myWork2 from './myWork/myWork2.png';
import myWork3 from './myWork/myWork3.png';
import myWork31 from './myWork/myWork3.1.png';
import myWork4 from './myWork/myWork4.png';
import WorkItem from './WorkItem/WorkItem';
const Galery = () => {
    return <div className={classes.Galery}>
        <WorkItem img={myWork} />
        <WorkItem img={myWork1} />
        <WorkItem img={myWork2} />
        <WorkItem img={myWork3} />
        <WorkItem img={myWork31} />
        <WorkItem img={myWork4} />
    </div>
}

export default Galery;