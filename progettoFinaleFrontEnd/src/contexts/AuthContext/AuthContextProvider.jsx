import { AuthContext } from "./AuthContext";
import { useState } from "react";


export function AuthContextProvider({children}){

    const[user,setUser] = useState({
        nome: "",
        cognome: "",
        email: "",
        ruolo: [],
        isAuthorized: true
    });

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );


}