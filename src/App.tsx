import * as React from 'react';
import Entry from './components/Entry'
import './App.css';
import { IDailyTransWeather, ILocationWeather, IWeeklyWeatherResponse } from './types/api';
import WeeklyWeather from './components/WeeklyWeather';
import { apiTransformer } from './utils/transformer';

function App() {
  const [location, setLocation] = React.useState<string>('');
  const [weather, setWeather] = React.useState<IDailyTransWeather[]>([]);
  const [error, setError] = React.useState<string>('');
  const APIKEY = process.env.REACT_APP_WEATHER_API;

  React.useEffect(() => {
    document.title = `${location} Weather To Go`
    setError('');
    getWeather(location);
    //api call to go here
  }, [location])


  async function getWeather(location: string) {
    try {
      if(!location){
      return setWeather([])
      }
      //set string to a const
      //consider passing in the location/key as obj- is this possible?
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`)
      const current: ILocationWeather = await response.json()
      const { lat, lon } = current?.coord;
      const sevenResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${APIKEY}`)
      const sevenCurrent: IWeeklyWeatherResponse = await sevenResponse.json()
      setWeather(apiTransformer(sevenCurrent))
    }
    catch (error) {
      setWeather([])
      setError('Whoops that didnt work, try again.')
    }
  }


  return (
    <div className="App">
      <header className='header'>
        <h1> Weather To Go </h1>
        <h2 className='city'>{location}</h2>
      </header>
      <Entry setLocation={setLocation} error={error} />
      <WeeklyWeather weather={weather} />
    </div>
  );
}

export default App;
