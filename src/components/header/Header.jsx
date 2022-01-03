import { useGuest } from '../../context/GuestContext';
import './header.css'

const Header = () => {
    const {guest} = useGuest()
    return (
        <section className='header'>
            <div>
                <img src='https://alchemy-guestbook.netlify.app/static/media/guestbook.b8329dbf.png' style={{height: 50 }}alt='book' />
            </div>
            <div className='welcome'>
                {guest ? <h3>Signing Guestbook as <span>{guest}</span></h3> : <h3>Sign in Friend!</h3>}
            </div>
        </section>
    )
}
export default Header;