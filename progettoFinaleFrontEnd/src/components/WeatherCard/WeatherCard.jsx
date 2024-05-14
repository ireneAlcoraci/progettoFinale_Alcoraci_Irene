export function WeatherCard(props) {
    return (
        <div className="col">
            <div className="card m-2" style={{ width: "18rem}" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.citta}</h5>
                    <p className="card-text">temperatura: {props.temperatura} °F</p>
                    <p className="card-subtitle mb-2 text-body-secondary">temperatura massima: {props.maxTemp} °F</p>
                    <p className="card-subtitle mb-2 text-body-secondary">temperatura minima: {props.minTemp} °F</p> 
                    <p className="card-text">umidità: {props.umidita}</p>                   
                    <p className="card-text">{props.tempo}</p>
                </div>
            </div>
        </div>
    );

}