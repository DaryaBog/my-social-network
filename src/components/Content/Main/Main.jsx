import classes from './Main.module.css';
import About from './About/About';
import Posts from './Posts/Posts';

const Main = () => {
    return <main className={classes.Main}>
        <About />
        <Posts />
    </main>
}

export default Main;