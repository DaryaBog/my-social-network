import React from 'react'
import classes from './Posts.module.css';
import Post from './Post/Post';

const NewPost = () => {
    return <div className={classes.NewPost}>
        <textarea className={classes.text} name="post" cols="100" rows="2" placeholder='Что нового?'></textarea>
        <button className={classes.btn + ' ' + classes.add}> Прикрепить файл </button>
        <button className={classes.btn + ' ' + classes.pub}> Опубликовать </button>
    </div>
}

const Posts = (props) => {
    return (
        <section className={classes.Posts}>
            <NewPost />
            {props.post.map(e => <Post message={e.message} />)}
        </section>
    )
}

export default Posts;