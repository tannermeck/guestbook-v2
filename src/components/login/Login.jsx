import { useState } from 'react';
import { useGuest } from '../../context/GuestContext';
import { useHistory, useLocation } from 'react-router-dom';
import style from './login.css';

export default function Login(){
    const history = useHistory();
    const location = useLocation();
    const { setGuest } = useGuest();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { from } = location.state || { from: { pathname: '/'}}
        if (username === process.env.REACT_APP_AUTH_USERNAME && password === process.env.REACT_APP_AUTH_PASSWORD){
            setGuest(username)
            history.replace(from);
            setError('')
        } else {
            setError('invalid login credentials')
        }
    }

    return (
        <fieldset>
            <legend>Sign In</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input className={style.inputBox}
                    id="username"
                    type="text"
                    name="username"
                    required
                    onChange={({target}) => setUsername(target.value)}
                    value={username}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    onChange={({target}) => setPassword(target.value)}
                    value={password}
                />
                <button type="submit">Sign In</button>
            </form>
            <p>{error}</p>
        </fieldset>
    )
}