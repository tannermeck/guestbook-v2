import { useContext, useState, createContext } from 'react';

const GuestContext = createContext();

const GuestProvider = ({children}) => {
    const [guest, setGuest] = useState('')

    return (
        <GuestContext.Provider value={{guest, setGuest}}>
            {children}
        </GuestContext.Provider>
    )
}
const useGuest = () => {
    const context = useContext(GuestContext);
    if (context === undefined){
        throw new Error('useGuest hook must be called inside of a GuessContext Provider');
    }
    return context;
}
export { GuestProvider, useGuest}