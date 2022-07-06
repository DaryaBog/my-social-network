import classes from './Sidebar.module.css';

const Sidebar = () => {
    return <aside className={classes.Sidebar}>
        <p><a className="Sidebar__main" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Профиль</a></p>
        <p><a className="Sidebar__feed" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Новости</a></p>
        <p><a className="Sidebar__im" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Сообщения</a></p>
        <p><a className="Sidebar__friends" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Друзья</a></p>
    </aside>
}

export default Sidebar;
