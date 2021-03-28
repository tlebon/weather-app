import * as React from 'react';
import Entry from './components/Entry'
import './App.css';
import { IDailyTransWeather } from './types/api';
import WeeklyWeather from './components/WeeklyWeather';
import getWeather from './utils/api';

function App() {
  const [location, setLocation] = React.useState<string>('');
  const [weather, setWeather] = React.useState<IDailyTransWeather[]>([]);
  const [error, setError] = React.useState<string>('');
  const initialRender = React.useRef(true);


  React.useEffect(() => {
    //is this the necessary/right way to do things?
    document.title = `${location} Weather To Go`
    setError('');
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather(location)
        .then(data => setWeather(data))
        .catch(error => setError(error));
    }
  }, [location])




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
