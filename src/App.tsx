import * as React from 'react';
import Entry from './components/Entry';
import './App.css';
import { IDailyTransWeather } from './types/api';
import WeeklyWeather from './components/WeeklyWeather';
import getWeather from './utils/api';

function App(): JSX.Element {
  const [location, setLocation] = React.useState<string>('');
  const [weather, setWeather] = React.useState<IDailyTransWeather[]>([]);
  const [isMetric, setisMetric] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const initialRender = React.useRef(true);


  React.useEffect(() => {
    document.title = `${location} Weather To Go`;
    setError('');
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather(location, isMetric)
        .then(data => setWeather(data))
        .catch(error => setError(error.message));
    }
  }, [location, isMetric]);




  return (
    <div className="App">
      <header className='header'>
        <h1 className='title'> Weather To Go </h1>
        <h2 className='city'>{location}</h2>
      </header>
      <main>
        <Entry error={error}
          setLocation={setLocation} />
        <WeeklyWeather weather={weather} />

        {!!weather.length && <button className='units-button'
          onClick={() => setisMetric(!isMetric)}>
          {isMetric ? 'C' : 'F'}
        </button>}
      </main>
    </div>
  );
}

export default App;
