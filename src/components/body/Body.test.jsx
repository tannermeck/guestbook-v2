import {screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { GuestProvider } from '../../context/GuestContext';
import Body from './Body';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Login from '../login/Login';

// jest.mock('../../context/GuestContext', () => {
//     return {
//         useGuest: function () {
//             return {
//                 guest: 'tanner'
//             }
//         }
//     }
// });

// it('should render the body component', async() => {
//     const { container } = render(
//                             <GuestProvider>
//                                 <MemoryRouter>
//                                     <Switch>
//                                         <Route exact path='/'>
//                                             <Body />
//                                         </Route>
//                                     </Switch>
//                                 </MemoryRouter>
//                             </GuestProvider>)

//     const entryInput = await screen.findByPlaceholderText('Your Entry');
//     const button = await screen.findByRole('button', {name: 'sign'})

//     userEvent.type(entryInput, 'Thanks');
//     userEvent.click(button);
    
//     const nameEntry = await screen.findByText('Thanks for signing Tanner')
//     const guestEntry = await screen.findByText('Thanks');

//     expect(nameEntry).toBeInTheDocument();
//     expect(guestEntry).toBeInTheDocument();
//     expect(container).toMatchSnapshot();

// });
it('should render the body component', async() => {
    const { container } = render(
                            <GuestProvider>
                                <Body />
                            </GuestProvider>)

    expect(container).toMatchSnapshot();
});