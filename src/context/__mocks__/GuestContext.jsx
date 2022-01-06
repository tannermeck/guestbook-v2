import { createContext, useState } from "react";

const GuestContext = createContext();

const GuestProvider = ({mockUser, children}) => {
    const [guest, setGuest] = useState(
    mockUser ? 'tanner' : '' )

    return (
        <GuestContext.Provider value={{guest, setGuest}}>
            {children}
        </GuestContext.Provider>
    )
}
export { GuestProvider, GuestContext }