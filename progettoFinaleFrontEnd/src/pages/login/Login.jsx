import { useEffect } from "react"
import { LoginForm } from "../../components/loginForm/LoginForm";

export function Login(){
    
    useEffect(()=>{
        document.title = "Login"
    },[]);

    return(
        <div>
            <h1 className="text-center mt-5">Login</h1>
            <LoginForm/>
        </div>
    )
}