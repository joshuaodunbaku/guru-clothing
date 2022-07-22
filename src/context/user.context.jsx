import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase.util";

// actual value yoiu want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})
// actual component
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    // Authentication Monitor
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user)
            setCurrentUser(user)
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

{/* <UserProvider>
    <Navigation/>
</UserProvider> */}