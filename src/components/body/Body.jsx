import { useState } from 'react';
import { useGuest } from '../../context/GuestContext';
import Entry from '../entry/Entry';
import './body.css'

const Body = () => {
    const {guest, setGuest} = useGuest();
    const [name, setName] = useState('')
    const [entry, setEntry] = useState('')
    const [entries, setEntries] = useState([])

    const handleGuestEntry = (e) => {
        e.preventDefault();
        setGuest(name)
        setEntries([...entries, {name, entry}])
        setEntry('')
    }

    return (
        <div className='inputField'>
            <div>
                {!guest && 
                <h3>Please Sign the Guestbook!</h3> 
                }
                {guest && 
                    <h3>{`Thanks for signing ${guest}`}</h3>
                }
            </div>
            <form onSubmit={handleGuestEntry}>
                {!guest &&
                <div className='text'>
                    <label>Guest Name</label>
                    <input type='text' placeholder='Guest Name...' value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                }
                <div className='text'>
                    <label>Guest Entry</label>
                    <textarea placeholder='Your Entry' value={entry} onChange={(e) => setEntry(e.target.value)} required/>
                </div>
                <div className='buttonAndSignout'>
                    <button>Sign</button>
                    {guest && 
                        <button className='signout'
                            onClick={()=> {
                                setGuest('')
                                setName('')
                                setEntry('')
                            }}
                        >
                            {`Not ${guest} ?`}</button>
                    }
                </div>
            </form>
            <Entry entries={entries} />
        </div>
    )
}
export default Body;