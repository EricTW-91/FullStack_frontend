import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Input, InputLabel, Paper } from '@mui/material';

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSignUp = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/auth/signup', {
            username: user.username,
            email: user.email,
            password: user.password
        })
        console.log(response)

    }

    // useEffect(() => {
    //     console.log(user)
    // })


    return (
        <div className='auth'>
            <Paper>
                <form className="authForm" onSubmit={handleSignUp}>
                        <FormControl>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input
                                id="username"
                                type="text"
                                value={user.username}
                                onChange={(e)=>setUser({...user, username: e.target.value} )}
                            ></Input>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={(e)=>setUser({...user, email: e.target.value} )}
                            ></Input>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e)=>setUser({...user, password: e.target.value} )}
                            ></Input>
                        </FormControl>
                        <Button type="submit">Sign Up</Button>
                </form>
            </Paper>
        </div>
    )
}

export default SignUp;