import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({children}){
    const {user} = useContext(AuthContext);
    const navigateTo = useNavigate();

    useEffect(() =>{
        if(!user.isLogged){
            navigateTo("/")
        }
    }, [])

    return(
        <>{children}</>
    )
}