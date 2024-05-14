import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound(){
    const navigateTo = useNavigate();

    useEffect(() => {
        document.title = "Not Found"
    }, []);

    const handleClick = () =>{
        navigateTo("/")
    }


    return(
         <div className="container align-items-center justify-content-center ">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center">404 Not Found</h1>
                <p>La pagina che stai cercando non è stata trovata. Prova ad inserire un url diverso o torna alla pagina di home</p>
                <div className="gap-4 d-flex justify-content-center">
                    <button className="btn btn-lg btn-primary" onClick={handleClick}>Torna alla home</button>
                </div>
            </div>

        </div>
    )
}