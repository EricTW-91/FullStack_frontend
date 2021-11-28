import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Input, InputLabel, Paper } from '@mui/material';
// import { useSelector, useDispatch } from 'redux';
import { log_in, log_out } from '../actions/action';
import store from '../stores/store';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    // const isLogin

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/auth/login', {
            email: user.email,
            password: user.password
        })
        console.log(response)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.data._id)
    }

    useEffect(() => {
        console.log(store.getState())
    })


    return (
        <div className='auth'>
            <Paper>
                <form className="authForm" onSubmit={handleLogin}>
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
                        <Button type="submit">Login</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Login;