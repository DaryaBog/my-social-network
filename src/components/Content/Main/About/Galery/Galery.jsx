import classes from './Galery.module.css';
import myWork from './myWork/myWork.png';
import myWork1 from './myWork/myWork1.png';
import myWork2 from './myWork/myWork2.png';
import myWork3 from './myWork/myWork3.png';
import myWork31 from './myWork/myWork3.1.png';
import myWork4 from './myWork/myWork4.png';
const Galery = () => {
    return <div className={classes.Galery}>
        <div className={classes.Item}>
            <img src={myWork} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork2} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork3} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork31} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork4} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork1} alt="work" />
        </div>
    </div>
}

export default Galery;