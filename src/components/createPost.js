import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Paper } from '@mui/material';


const CreatePostCard = () => {
    const [post, setPost] = useState({
        title: '',
        content:''
    })

    const handleCreatePost = async(e) => {
        // e.preventDefault()
        const response = await axios.post('http://localhost:5000/post/newPost',post, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
        })
        

    }

    return (
        <Paper style={{
            width: "60vw",
            height: "80vh",
            margin: "10vh auto"
        }}>
            <form className="createPostForm" onSubmit={ handleCreatePost }>
                <TextField
                    variant="standard"
                    id="postTitle"
                    label="Title"
                    onChange={(e)=>setPost({...post, title: e.target.value})}
                />
                <TextField
                    variant="outlined"
                    id="postTitle"
                    label="Content"
                    multiline
                    rows={5}
                    onChange={(e)=>setPost({...post, content: e.target.value})}
                />
                <Button variant="contained" type="submit">Post</Button>
            </form>

        </Paper>
    )
}

export default CreatePostCard;