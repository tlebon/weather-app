import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import DailyWeather from './Daily';
import './index.css';

interface IWeeklyWeather {
    weather: IDailyTransWeather[];
}


const WeeklyWeather: React.FunctionComponent<IWeeklyWeather> = (props) => {
    const { weather } = props;

    if (weather.length) {
        return (
            <div className='weather-box'>
                {weather.map((day) => <DailyWeather day={day} />)}
            </div>
        )
    }
    else return null;
}

export default WeeklyWeather;