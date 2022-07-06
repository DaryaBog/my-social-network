import classes from './Post.module.css';
import ava from './Avatar/я.jpg'

const Post = (props) => {
    return <div className={classes.Post}>
        <div className={classes.Ava}>
            <img src={ava} alt="avatar" />
        </div>
        <div className={classes.Text}>
            <p>{props.message}</p>
        </div>
    </div>
}

export default Post;