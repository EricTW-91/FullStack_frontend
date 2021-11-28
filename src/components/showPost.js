import React, { useState, useEffect } from 'react';
import PostCard from './postCard';
import axios from 'axios';
import { Grid } from '@mui/material';

const ShowPosts = () => {
    const [postArr, setPostArr] = useState(null)

    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/post/getPosts/${localStorage.getItem('id')}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = response.data.data
        setPostArr(data)
        console.log('Fetch posts!', data)
        // console.log(localStorage.getItem('id'))
    }, [])

    return postArr ? (
        <Grid className="postsGrid" container spacing={2} style={{width:"90vw", margin: "5vh auto"}}>
            {postArr.map((post, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <PostCard title={post.title} content={post.content} />
                    </Grid>
                )
            })}

        </Grid>
    ):(
        <div>There is no post!</div>
    )
}

export default ShowPosts;