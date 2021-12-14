import './entry.css';

const Entry = ({ entries }) => {
    return (
        <section className='entryContainer'>
            {entries.map(entry => (
                    <div className='entry' key={`${entry.name}-${entry.entry}`}>
                        <h2>{entry.name}</h2>
                        <h3>{entry.entry}</h3>
                    </div>
                ))
            }
        </section>
    )
}
export default Entry;