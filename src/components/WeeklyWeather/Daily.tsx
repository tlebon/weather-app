import * as React from 'react';
import { IDailyTransWeather } from '../../types/api';
import './index.css'

interface IDailyProps {
    day: IDailyTransWeather;
}
//map image to card based on 
const DailyWeather: React.FunctionComponent<IDailyProps> = (props) => {
    const { day } = props;
    return (//onClick={()=>setFocusedDay(day)}
        <div className='weather-card' >
            <h2>{day.day}</h2>
            <h3>{day.high}</h3>
            <h3>{day.low}</h3>
            {/* <h4>{day.weather.icon}</h4> */}
        </div>)
}


export default DailyWeather;