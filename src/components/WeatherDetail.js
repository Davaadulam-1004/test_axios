import WeatherIcon from "react-icons-weather";
export const WeatherDetail = ({weather}) => {
    let stamp = new Date(weather.time * 1000);
    const celc = ((weather.temperatureHigh - 32) * 5/9);
    const rounded = Math.round(celc);
    const celclow = ((weather.temperatureLow - 32) * 5/9);
    const lowrounded = Math.round(celclow);
    return(
        <>
            <div>
                <h3>
                    {stamp?.getDay() === 1 && "Monday"}
                    {stamp?.getDay() === 2 && "Tuesday"}
                    {stamp?.getDay() === 3 && "Wednesday"}
                    {stamp?.getDay() === 4 && "Thursday"}
                    {stamp?.getDay() === 5 && "Friday"}
                    {stamp?.getDay() === 6 && "Saturday"}
                    {stamp?.getDay() === 0 && "Sunday"}
                </h3>
                <div>
                    <WeatherIcon name="darksky" iconId={weather.icon} flip="horizontal" rotate="90" />
                </div>
                <div>{`${rounded}C`}/{`${lowrounded}C`}</div>
            </div>
        </>
    )
}