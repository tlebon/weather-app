import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import { tempUnit } from '../../utils/transformer';
import './index.css';

interface IWeatherDetails {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}

const WeatherDetails: React.FunctionComponent<IWeatherDetails> = (props) => {
    const { day, setDay } = props;
    const { day: daily } = day;
    const CURRENTLY = `Currently ${day.weather.description} & ${day.current} º${tempUnit(day)}`;

    return (<div
        aria-pressed='false'
        className='weather-detail'
        onClick={() => setDay(undefined)}
        role='button'
        tabIndex={0}>
        <div className='image-detail-wrap'>
            <img alt={day.weather.main}
                className='card-image'
                src={`/assets/${day.weather.icon}.png`} />
        </div>
        <div className='weather-details-card'>
            <h1 className='split-header'><span>{daily.weekday} </span><span>{daily.month} {daily.numeric}</span></h1>
            <h2 className='capitalize'>{day.current ? CURRENTLY : day.weather.description}</h2>

            <h3>High: {day.high} º{tempUnit(day)}</h3>
            <h3>Low: {day.low} º{tempUnit(day)}</h3>
            <h4>Sunrise: {day.sunrise}</h4>
            <h4>Sunset: {day.sunset}</h4>
        </div>
    </div>);
};

export default WeatherDetails;