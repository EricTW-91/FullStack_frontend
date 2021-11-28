import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePostCard from '../components/createPost';
import ShowPosts from '../components/showPost';
import { Button, Modal } from '@mui/material';

const Home = () => {
    const [modalToggle, setModalToggle] = useState(false)

    const handleGetPosts = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:5000/post/getPosts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response)
    }
    
    return (
        <div>
            <ShowPosts />
            <Button onClick={() => setModalToggle(true)}> New Post </Button>
            <Modal
                open={modalToggle}
                onClose={() => setModalToggle(false)}
            >
                <CreatePostCard />
            </Modal>
        </div>
    )
}

export default Home;