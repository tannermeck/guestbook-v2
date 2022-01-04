import {screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { GuestProvider } from '../../context/GuestContext';
import Body from './Body';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

jest.mock('../../context/GuestContext', () => {
    return {
        useGuest: function () {
            return {
                guest: 'tanner'
            }
        }
    }
});

it('should render the body component', async() => {
    const { container } = render(
                            <GuestProvider>
                                <MemoryRouter initialEntries={["/login"]}>
                                    <Switch>
                                        <Route exact path='/'>
                                            <Body />
                                        </Route>
                                    </Switch>
                                </MemoryRouter>
                            </GuestProvider>)

    // const nameInput = await screen.findByPlaceholderText('Guest Name...');
    const entryInput = await screen.findByPlaceholderText('Your Entry');
    const button = await screen.findByRole('button', {name: 'sign'})

    // userEvent.type(nameInput, 'Tanner');
    userEvent.type(entryInput, 'Thanks');
    userEvent.click(button);
    
    const nameEntry = await screen.findByText('Thanks for signing Tanner')
    const guestEntry = await screen.findByText('Thanks');

    expect(nameEntry).toBeInTheDocument();
    expect(guestEntry).toBeInTheDocument();
    expect(container).toMatchSnapshot();

});