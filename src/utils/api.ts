import { IDailyTransWeather, ILocationWeather, IWeeklyWeatherResponse } from '../types/api';
import { apiTransformer } from './transformer';
const APIKEY = process.env.REACT_APP_WEATHER_API;

export default async function getWeather(location: string, isMetric: boolean): Promise<IDailyTransWeather[]> {
	const units = isMetric ? 'metric' : 'imperial';

	if (!location) {
		throw new Error('Enter a city please!');
	}

	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=${units}`);
		const current: ILocationWeather = await response.json();
		const { lat, lon } = current?.coord;

		const sevenResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${APIKEY}&units=${units}`);
		const sevenCurrent: IWeeklyWeatherResponse = await sevenResponse.json();
		return apiTransformer(sevenCurrent, current, isMetric);
	}
	catch (error) {
		throw new Error('Whoops that didnt work, try again.');
	}
}
