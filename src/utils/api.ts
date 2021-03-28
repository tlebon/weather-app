import { ILocationWeather, IWeeklyWeatherResponse } from '../types/api';
import { apiTransformer } from './transformer';
const APIKEY = process.env.REACT_APP_WEATHER_API;

export default async function getWeather(location: string) {
    try {
        if (!location) {
            return []
        }
        //set api string to a const
        //consider passing in the location/key params as obj

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`)
        const current: ILocationWeather = await response.json()
        const { lat, lon } = current?.coord;
        const sevenResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${APIKEY}`)
        const sevenCurrent: IWeeklyWeatherResponse = await sevenResponse.json()
        return apiTransformer(sevenCurrent)
    }
    catch (error) {
        throw new Error('Whoops that didnt work, try again.')
    }
}
