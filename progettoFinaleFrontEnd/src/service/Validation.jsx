export function validationFormRegistration(values){
    const errors = {};

    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%&?]).{8,}$/;

        if(values.nome === ""){
            errors.nome = "Inserire nome"
        }

        if(values.cognome === ""){
            errors.cognome = "Inserire cognome"
        }

        if(values.email === ""){
            errors.email = "Inserire l'indirizzo email"
        }else if(!values.email.match(emailPattern)){
            errors.email = "Email inserita invalida"
        }

        if(values.password === ""){
            errors.password = "Inserire password"
        }else if(!values.password.match(passwordPattern)){
            errors.password = "Inserire almeno 8 caratteri di cui uno maiuscolo, un numero e un carattere speciale"
        }

        return errors;



}

