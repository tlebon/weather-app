import { IDailyTransWeather, IWeather } from './../types/api.d';
import { IWeeklyWeatherResponse } from '../types/api';
// consider importing a library
//or some better solution than this lookup array


export const apiTransformer = (weather: IWeeklyWeatherResponse, current: IWeather, units:string): IDailyTransWeather[] => {


    const solarConversion = (date: number) => new Date(date * 1000).toLocaleTimeString();
    // conside extensions/ changing structure
    const daily = weather.daily.map((day, index) => ({
        day: dateConversion(day.dt),
        sunrise: solarConversion(day.sunrise),
        sunset: solarConversion(day.sunset),
        high: day.temp.max,
        low: day.temp.min,
        isCelcius: units === 'metric' ? true : false,
        weather: index === 0 ? current : day.weather[0],
    }));

    return daily;
};


const dateConversion = (date: number) => {
    const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        {
            numeric: new Date(date * 1000).getDate(),
            month: MONTHS[new Date(date * 1000).getMonth()],
            weekday: WEEKDAYS[new Date(date * 1000).getDay()]
        }
    );
};

export const tempUnit = (day: IDailyTransWeather): 'C' | 'F' => day.isCelcius ? 'C' : 'F';

// TODO: make temp updater
// export const tempTransformer = (weather: IDailyTransWeather[]): IDailyTransWeather[] => {
//  const cFFlipper=(day:IDailyTransWeather)=>day.isCelcius?
//     return weather.map((day) => ({
//         ...day,

//     }))
// }
