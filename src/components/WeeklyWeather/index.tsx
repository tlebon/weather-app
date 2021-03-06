import * as React from 'react';
import { IDailyTransWeather } from '../../types';
import WeatherDetails from '../WeatherDetails';
import DailyWeather from './Daily';
import './index.css';

interface IWeeklyWeather {
    weather: IDailyTransWeather[];
}


const WeeklyWeather: React.FunctionComponent<IWeeklyWeather> = (props) => {
    const { weather } = props;
    const [focused, setFocused] = React.useState<IDailyTransWeather>();

    React.useEffect(() => {
        setFocused(weather.find((forecast) => forecast.day.numeric === focused?.day.numeric));
    }, [weather]);

    const weatherMap = weather.map((day) => (
        <React.Fragment key={day.day.numeric}>
            <DailyWeather day={day}
                setDay={setFocused} />
        </React.Fragment>
    ));
    if (weather.length) {
        return (
            <div className='weather-box'>
                {focused ? <WeatherDetails day={focused}
                    setDay={setFocused} /> : weatherMap}
            </div>
        );
    }
    else return null;
};

export default WeeklyWeather;