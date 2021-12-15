import { screen, render } from '@testing-library/react';
import { GuestProvider } from '../../context/GuestContext';
import Header from './Header';

it('should add a header component', async() => {
    const { container } = render(
                            <GuestProvider>
                                <Header />
                            </GuestProvider>)
    const message = await screen.findByText('Sign in Friend!')
    expect(message).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});