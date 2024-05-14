import { useEffect } from "react"
import {RegistrationForm} from "../../components/registrationForm/RegistrationForm"


export function Registration(){
    
    useEffect(()=>{
        document.title = "Registration"
    },[]);

    return(
        <div>
            <h1 className="text-center mt-5">Registrazione</h1>
           <RegistrationForm/> 
        </div>
    )
}