import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import './index.css';

interface IDailyProps {
    day: IDailyTransWeather;
    setDay: React.Dispatch<React.SetStateAction<IDailyTransWeather | undefined>>
}
//map image to card based on 
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
        <h2>{day.day.weekday}</h2>
        <h3>{day.high} º{day.tempUnit}</h3>
        <h3>{day.low} º{day.tempUnit}</h3>
      </div>

    </div>);
};


export default DailyWeather;