import style from './login.css';

export default function Login(){
    return (
        <fieldset>
            <legend>Sign In</legend>
            <form>
                <label htmlFor="username">
                Username
                </label>
                <input className={style.inputBox}
                id="username"
                type="text"
                name="username"
                required
                />
                <label htmlFor="password">
                Password
                </label>
                <input
                id="password"
                type="password"
                name="password"
                required
                />
                <button
                type="submit"
                >
                Sign In
                </button>
            </form>
            <p>Error message goes here</p>
        </fieldset>
    )
}