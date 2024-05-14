import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../service/RESTService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";


export function LoginForm() {
    const navigateTo = useNavigate();
    const { user, setUser } = useContext(AuthContext)

    const [errorForm, setErrorForm] = useState(false);

    const [formLoginData, setFormLoginData] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLoginData({ ...formLoginData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formLoginData);

        const data = await userLogin(formLoginData);
        if (data == "") {
            setErrorForm(true);
        } else {
            const jwtToken = data.token;
            console.log(jwtToken);
            Cookies.set("token", jwtToken);

            const decode = jwtDecode(jwtToken);
            const { nome, cognome, email } = decode;
            setUser({
                nome: nome,
                cognome: cognome,
                email: email,
                isLogged: true
            });


            navigateTo("/login/weatherPage")
        }

    }

    const handleError = () => {
        if (errorForm) {
            return "errore nella login"
        }
    }


    return (
        <form className="container my-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formLoginData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formLoginData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Accedi</button>
            <div style={{backgroundColor: " rgba(243, 149, 149)", marginTop: "1rem", textAlign:"center"}}>{handleError()}</div>
        </form>
    );
}