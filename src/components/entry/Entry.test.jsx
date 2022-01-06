import { screen, render } from '@testing-library/react';
import Entry from './Entry';

it('should render entries', async () => {
    const entries = [{guest: 'kittle', entry: 'Thank you'}]
    const { container } = render(<Entry entries={entries}/>)
    
    const guest = await screen.findByText('kittle', {exact: false})
    const entry = await screen.findByText('Thank you')
    
    expect(guest).toBeInTheDocument();
    expect(entry).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});