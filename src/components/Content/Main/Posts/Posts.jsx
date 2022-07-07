import React from 'react'
import classes from './Posts.module.css';
import Post from './Post/Post';
const Posts = () => {
    return <section className={classes.Posts}>
        <Post message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolor.' />
        <Post message='Lorem ipsum dolor sit amet.' />
        <Post message='Consectetur adipisicing elit. Similique, dolor.' />
        <Post message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus ullam architecto enim exercitationem at sapiente cum quod! Suscipit eos, dolores natus perspiciatis nostrum similique consectetur reprehenderit inventore nesciunt laboriosam.' />

    </section>
}

export default Posts;