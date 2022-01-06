import './entry.css';

const Entry = ({ entries }) => {
    return (
        <section className='entryContainer'>
            {entries.map(entry => (
                    <div className='entry' key={`${entry.guest}-${entry.entry}`}>
                        <p className='entryName'>-{entry.guest}</p>
                        <p className='entryText'>{entry.entry}</p>
                    </div>
                ))
            }
        </section>
    )
}
export default Entry;