import { IDailyTransWeather } from './../types/api.d';
import { IWeeklyWeatherResponse } from "../types/api"
// consider importing a library
//or some better solution than this lookup array
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// export const tempTransformer=()

export const apiTransformer = (weather: IWeeklyWeatherResponse): IDailyTransWeather[] => {
    const kToCTemp = (temp: number) => Math.floor(temp - 273.15);
    const dateConversion = (date: number) => WEEKDAYS[new Date(date * 1000).getDay()];
    const solarConversion = (date: number) => new Date(date * 1000).toLocaleTimeString();
// conside extensions/ changing structure
    const daily = weather.daily.map((day) => ({
        day: dateConversion(day.dt),
        sunrise: solarConversion(day.sunrise),
        sunset: solarConversion(day.sunset),
        high: kToCTemp(day.temp.max),
        low: kToCTemp(day.temp.min),
        weather: day.weather,
    }))

    return daily;
}