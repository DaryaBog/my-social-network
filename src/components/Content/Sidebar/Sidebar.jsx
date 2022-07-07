import classes from './Sidebar.module.css';

const Sidebar = () => {
    return <aside className={classes.Sidebar}>
        <p><a className="Sidebar__main" href="/main" > Профиль</a></p>
        <p><a className="Sidebar__feed" href="/feed" > Новости</a></p>
        <p><a className="Sidebar__im" href="/dialogs"> Сообщения</a></p>
        <p><a className="Sidebar__friends" href="/friends" > Друзья</a></p>
    </aside>
}

export default Sidebar;
