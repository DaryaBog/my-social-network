import classes from './Galery.module.css';
import myWork from './myWork/myWork.png';
const Galery = () => {
    return <div className={classes.Galery}>
        <div className={classes.Item}>
            <img src={myWork} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork} alt="work" />
        </div>
        <div className={classes.Item}>
            <img src={myWork} alt="work" />
        </div>
    </div>
}

export default Galery;