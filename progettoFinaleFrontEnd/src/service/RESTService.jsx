export async function userLogin(obj) {
    const jsonBody = JSON.stringify(obj);

    const response = await fetch("http://localhost:8080/api/login", {
        mode: "cors",
        method: "POST",
        body: jsonBody,
        headers: {
            "Content-Type": "application/json",

        }
    })

    if(response.ok){
        return await response.json();
    }else{
        return "";
    }

   
}

export async function userLogout(token) {

    const response = await fetch("http://localhost:8080/api/logout", {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return await response;
}

export async function userRegistration(obj) {

    const jsonBody = JSON.stringify(obj);

        const response = await fetch("http://localhost:8080/api/registra", {
            mode: "cors",
            method: "POST",
            body: jsonBody,
            headers: {
                "Content-Type": "application/json",

            }
        })

        if (response.ok) {
            return "ok";
        } else {
            return "";
        }
    
}


export async function getWeaderData(cityName, key) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`);

    if(response.ok){
        return await response.json();
    }else{
        return "";
    }
}

export async function saveWeather(obj) {

    const jsonBody = JSON.stringify(obj);

        const response = await fetch("http://localhost:8080/api/tempo/crea", {
            mode: "cors",
            method: "POST",
            body: jsonBody,
            headers: {
                "Content-Type": "application/json",

            }
        })

        if (response.ok) {
            return "ok";
        } else {
            return "";
        }
    
}