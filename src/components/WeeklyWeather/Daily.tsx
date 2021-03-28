import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import './index.css'

interface IDailyProps {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}
//map image to card based on 
const DailyWeather: React.FunctionComponent<IDailyProps> = (props) => {
    const { day, setDay } = props;
    return (
        <div className='weather-card' onClick={() => setDay(day)} key={day.day.numeric}>
            <div className='image-wrap'>
                <img className='card-image'src={`/assets/${day.weather.icon}.png`} alt={day.weather.main} />
            </div>

            <div>
                <h2>{day.day.weekday}</h2>
                <h3>{day.high}</h3>
                <h3>{day.low}</h3>
            </div>

        </div>)
}


export default DailyWeather;