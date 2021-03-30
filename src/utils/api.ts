/* eslint-disable indent */
import { IDailyTransWeather, ILocationWeather, IWeeklyWeatherResponse } from '../types/api';
import { apiTransformer } from './transformer';
const APIKEY = process.env.REACT_APP_WEATHER_API;

export default async function getWeather(location: string, units: string): Promise<IDailyTransWeather[]> {

	if (!location) {
		throw new Error('Enter a city please!');
	}
	//set api string to a const
	//consider passing in the location/key params as obj
	// clean this guy up, i dont like how it looks now
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=${units}`);
		const current: ILocationWeather = await response.json();
		const { coord: { lat, lon }, weather } = current;

		const sevenResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${APIKEY}&units=${units}`);
		const sevenCurrent: IWeeklyWeatherResponse = await sevenResponse.json();
		return apiTransformer(sevenCurrent, weather[0], units);
	}
	catch (error) {
		throw new Error('Whoops that didnt work, try again.');
	}
}
