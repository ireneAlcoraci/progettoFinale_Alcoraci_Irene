import { useEffect, useState } from "react";
import { getWeaderData } from "../../service/RESTService";
import {WeatherCard} from "../../components/WeatherCard/WeatherCard"

export function WeatherPage() {
    const ApiKey = "cbc6af74c871487f467af76ade7a5290";
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState({
        name: ""
    });

    useEffect(() => {
        document.title = "Weather page";
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCity({ ...city, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(city);
        const data = await getWeaderData(city.name, ApiKey);
        setCity("");
        setWeatherData(data);
    }


    return (
        <div className="container">
            <form className="input-group my-5" onSubmit={handleSubmit}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Città</span>
                </div>
                <input type="text" className="form-control" placeholder="inserisci città" name="name" aria-describedby="basic-addon1" value={city.name} onChange={handleChange} />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Invia</button>
                </div>
            </form>

            {typeof weatherData.main === "undefined" ?
                <div>
                    <p> Benvenuto nel pannello del tempo cerca una città per sapere il tempo che farà </p>
                </div> :
                <div className="row">
                        <WeatherCard
                            citta={weatherData.name}
                            temperatura={weatherData.main.temp}
                            maxTemp={weatherData.main.temp_max}
                            minTemp={weatherData.main.temp_min}
                            umidita={weatherData.main.humidity}
                            tempo={weatherData.weather[0].main}>

                        </WeatherCard>
                </div>
               
            }
                </div>
    );
}