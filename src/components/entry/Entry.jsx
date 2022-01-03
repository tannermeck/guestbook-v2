import './entry.css';

const Entry = ({ entries }) => {
    return (
        <section className='entryContainer'>
            {entries.map(entry => (
                    <div className='entry' key={`${entry.name}-${entry.entry}`}>
                        <p className='entryName'>-{entry.name}</p>
                        <p className='entryText'>{entry.entry}</p>
                    </div>
                ))
            }
        </section>
    )
}
export default Entry;