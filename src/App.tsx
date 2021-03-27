import * as React from 'react';
import Entry from './components/Entry'
import './App.css';
import { ILocationWeather } from './types/api';

function App() {
  const [location, setLocation] = React.useState<string>('')
  const APIKEY = process.env.REACT_APP_WEATHER_API;
  React.useEffect(() => {
    document.title = `${location} Weather To Go`
    getWeather(location)
    //api call to go here
  }, [location])


  async function getWeather(location: string) {
    try {
      //set string to a const
      //consider passing in the location/key as obj
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`)
      const current: ILocationWeather= await response.json()
      const {lat, lon}= current.coord;
      console.log(current)
    }
    catch (error) {
      console.error(error.message)
    }
  }


  return (
    <div className="App">
      <header>
        <h1> Weather To Go </h1>
        <h2 className='city'>{location}</h2>
      </header>
      <Entry setLocation={setLocation} />

    </div>
  );
}

export default App;
