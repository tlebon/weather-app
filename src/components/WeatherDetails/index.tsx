import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import './index.css'

interface IWeatherDetails {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}

const WeatherDetails: React.FunctionComponent<IWeatherDetails> = (props) => {
    const { day, setDay } = props;
    const { day: daily } = day;
    return (<div className='weather-detail' onClick={() => setDay(undefined)}><div>
        <img src={`/assets/${day.weather.icon}.png`} alt={day.weather.main} />
    </div>
        <div>
            <h1>{daily.weekday} {daily.month} {daily.numeric}</h1>
            <h3 className='capitalize'>{day.weather.description}</h3>
            <h3>High:{day.high}</h3>
            <h3>Low: {day.low}</h3>
            <h4>Sunrise: {day.sunrise}</h4>
            <h4>Sunset: {day.sunset}</h4>
        </div>
    </div>);
}

export default WeatherDetails;