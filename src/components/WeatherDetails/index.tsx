import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import './index.css';

interface IWeatherDetails {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}

const WeatherDetails: React.FunctionComponent<IWeatherDetails> = (props) => {
	const { day, setDay } = props;
	const { day: daily } = day;
	return (<div aria-pressed='false' className='weather-detail' role='button' onClick={() => setDay(undefined)} tabIndex={0}>
		<div className='image-detail-wrap'>
			<img className='card-image' src={`/assets/${day.weather.icon}.png`} alt={day.weather.main} />
		</div>
		<div className='weather-details-card'>
			<h1 className='split-header'><span>{daily.weekday} </span><span>{daily.month} {daily.numeric}</span></h1>
			<h2 className='capitalize'>{day.weather.description}</h2>
			<h3>High:{day.high} º{day.tempUnit}</h3>
			<h3>Low: {day.low} º{day.tempUnit}</h3>
			<h4>Sunrise: {day.sunrise}</h4>
			<h4>Sunset: {day.sunset}</h4>
		</div>
	</div>);
};

export default WeatherDetails;