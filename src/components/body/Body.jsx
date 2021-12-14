import { useState } from 'react';
import { useGuest } from '../../context/GuestContext';
import './body.css'

const Body = () => {
    const {guest, setGuest} = useGuest();
    const [entry, setEntry] = useState('')
    const [entries, setEntries] = useState([])

    const handleGuestEntry = (e) => {
        e.preventDefault();
    }

    return (
        <div className='inputField'>
            <form onSubmit={handleGuestEntry}>
                <div className='text'>
                    <label>Guest Name</label>
                    <input type='text' placeholder='Guest Name...' value={guest} onChange={(e) => setGuest(e.target.value)}/>
                </div>
                <div className='text'>
                    <label>Guest Entry</label>
                    <textarea placeholder='Your Entry' value={entry} onChange={(e) => setEntry(e.target.value)}/>
                </div>
                <button>Sign</button>
            </form>
        </div>
    )
}
export default Body;