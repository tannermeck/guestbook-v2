import './body.css'

const Body = () => {
    return (
        <div className='inputField'>
            <form>
                <div className='text'>
                    <label>Guest Name</label>
                    <input type='text' placeholder='Guest Name...' />
                </div>
                <div className='text'>
                    <label>Guest Entry</label>
                    <textarea placeholder='Your Entry' />
                </div>
                <button>Sign</button>
            </form>
        </div>
    )
}
export default Body;