import { useGuest } from "../../context/GuestContext";
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({children, ...routerProps}){
    const { guest } = useGuest();
    return (
        <Route {...routerProps}
        render={({ location }) => guest ? (
            children
        ) : (
            <Redirect to={{ pathname: '/login',
                            state: { from: location }
        }}
        />
        )
        }
        />
    )
}