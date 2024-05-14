import {NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";

export function Navbar() {
    const {user} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
            <div className="container-fluid">
                <div className="navbar-brand">{user.nome === ""? "Gestionale corsi" :`Utente ${user.nome}`}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        {user.isLogged? <NavLink className="nav-link" to="/login/userDetails" >Dettagli utente</NavLink> : ""}
                        {user.isLogged? <NavLink className="nav-link" to="/login/weatherPage" >Dettagli tempo</NavLink> : ""}
                   </div>
                </div>
            </div>
        </nav>
    );
}