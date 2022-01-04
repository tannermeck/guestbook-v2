import { render } from '@testing-library/react';
import { GuestProvider } from '../../context/GuestContext';
import Login from './Login';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

it('should render a login view', () => {
    const { container } = render(
    <GuestProvider>
        <MemoryRouter initialEntries={["/login"]}>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
            </Switch>
        </MemoryRouter>
    </GuestProvider>)
    expect(container).toMatchSnapshot();
    
})