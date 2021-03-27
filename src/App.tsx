import * as React from 'react';
import Entry from './components/Entry'
import './App.css';
import { ILocationWeather, IWeeklyWeather } from './types/api';

function App() {
  const [location, setLocation] = React.useState<string>('');
  const [weather, setWeather] = React.useState<IWeeklyWeather>();
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
      //set string to a const
      //consider passing in the location/key as obj
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`)
      const current: ILocationWeather = await response.json()
      const { lat, lon } = current?.coord;
      const sevenResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${APIKEY}`)
      const sevenCurrent: IWeeklyWeather = await sevenResponse.json()
      setWeather(sevenCurrent)
    }
    catch (error) {
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
    </div>
  );
}

export default App;
