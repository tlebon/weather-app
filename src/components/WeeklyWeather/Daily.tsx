import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import { tempUnit } from '../../utils/transformer';
import './index.css';

interface IDailyProps {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}

const DailyWeather: React.FunctionComponent<IDailyProps> = (props) => {
    const { day, setDay } = props;

    return (
        <div aria-pressed='false'
            className='weather-card'
            key={day.day.numeric}
            onClick={() => setDay(day)}
            role='button'
            tabIndex={0}>
            <div className='image-wrap'>
                <img alt={day.weather.main}
                    className='card-image'
                    src={`/assets/${day.weather.icon}.png`} />
            </div>

            <div className='short-details'>
                <h2 className={day.current ? 'current-title' : undefined}>{day.day.weekday}</h2>
                {day.current && <h3>Currently {day.current} º{tempUnit(day)}</h3>}
                <h3>{day.high} º{tempUnit(day)}</h3>
                <h3>{day.low} º{tempUnit(day)}</h3>
            </div>

        </div>);
};


export default DailyWeather;