import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../service/RESTService";
import Cookies from "js-cookie";


export function UserDetails(){
    const navigateTo = useNavigate();
    const {user, setUser} = useContext(AuthContext);
    

    useEffect(() => {
        document.title = "User Details"
    }, []);

    const handleClick = async () =>{
        const response = await userLogout(Cookies.get("token"));
        
        if(response.ok){
            Cookies.remove("token");
            setUser({
                nome: "",
                cognome: "",
                email: "",
                isLogged: false
            });

            navigateTo("/login")
        }

        
    }

   
    return(
        <div className="container mt-5 position-relative">
            <h1>Benvenuto {user.nome}&nbsp;{user.cognome}</h1>
            <button className="btn btn-lg btn-primary position-absolute top-0 end-0" style={{marginTop: "5rem"}} onClick={handleClick}>Logout</button>
            
            
            <div className="group-form position-absolute top-50 start-50 translate-middle">
            <h2>Dati Utente</h2>
                <p>Nome: {user.nome}</p>
                <p>Cognome: {user.cognome}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
}