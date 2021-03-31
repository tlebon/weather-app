import { IDailyTransWeather, ILocationWeather } from '../types';
import { IWeeklyWeatherResponse } from '../types';

export const apiTransformer = (weather: IWeeklyWeatherResponse, current: ILocationWeather, isMetric: boolean): IDailyTransWeather[] => {


    const solarConversion = (date: number) => new Date(date * 1000).toLocaleTimeString();

    const daily = weather.daily.map((day, index) => ({
        day: dateConversion(day.dt),
        sunrise: solarConversion(day.sunrise),
        sunset: solarConversion(day.sunset),
        high: Math.floor(day.temp.max),
        low: Math.floor(day.temp.min),
        current: index === 0 ? Math.floor(current.main.temp) : undefined,
        isCelcius: isMetric,
        weather: index === 0 ? current.weather[0] : day.weather[0],
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
