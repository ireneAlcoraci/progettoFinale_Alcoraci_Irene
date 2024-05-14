import { useState } from "react";
import { userRegistration } from "../../service/RESTService";
import { useNavigate } from "react-router-dom";
import { validationFormRegistration } from "../../service/Validation";


export function RegistrationForm(){
    const navigateTo = useNavigate();

    const [formRegistationData, setFormRegistrationData] = useState({
        nome: "",
        cognome:"",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [registrationError, setRegistrationError] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState("");
    

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormRegistrationData({...formRegistationData, [name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.table(formRegistationData);
        setErrors(validationFormRegistration(formRegistationData));
   

        console.log(errors)
        const response = await userRegistration(formRegistationData);
        console.log(response)
        if(response == ""){
            setRegistrationError(true);
        }else{
            setRegistrationSuccess(true);
        }

    }

    const handleError = () => {
        if (registrationError) {
            return "errore nella registrazione"
        }
               
    }

    const handleClick = () =>{
        navigateTo("/login");
    }
    

    return(
        <form className="container needs-validation col-sm-8 mt-3" onSubmit={handleSubmit}>
            <p className="lead h3">Dati Anagrafici</p>

            <div className="form-group">
                <label htmlFor="nome">Nome *</label>
                <input id="nome" name="nome" type="text" className="form-control" value={formRegistationData.nome} onChange={handleChange}/>
                {errors.nome && <div  style={{color:"red"}}> {errors.nome}</div>}

                <label htmlFor="cognome">Cognome *</label>
                <input id="cognome" name="cognome" type="text" className="form-control" value={formRegistationData.cognome} onChange={handleChange}/>
                {errors.cognome && <div style={{color:"red"}}> {errors.cognome} </div>}                                  
            </div>

            <p className="lead h3">Autenticazione</p>
            <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input name="email" id="email" type="email" className="form-control" size="32" value={formRegistationData.email} onChange={handleChange}/>
                {errors.email && <div  style={{color:"red"}}> {errors.email} </div>}
            </div>

            <div className="form-group">
                <label htmlFor="pass">Password *</label>
                <input name="password" id="pass" type="password" className="form-control"  size="32" value={formRegistationData.password} onChange={handleChange}/>
                {errors.password && <div  style={{color:"red"}}> {errors.password} </div>}
            </div>
            <button name="ok" id="ok" type="submit" className="btn btn-primary mt-3">Invia</button>
            <div style={{backgroundColor: " rgba(243, 149, 149)", marginTop: "1rem", textAlign:"center"}}>{handleError()}</div>
            {registrationSuccess? <>
                <div style={{backgroundColor: "green", marginTop: "1rem", textAlign:"center"}}>registrazione avvenuta con successo</div>
                <button className="btn btn-lg btn-primary" onClick={handleClick}>Vai alla login</button>
                </> : <></>}
            
        </form>
    );
}