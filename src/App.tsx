import * as React from 'react';
import Entry from './components/Entry'
import './App.css';

function App() {
  const [location, setLocation] = React.useState<string>('')

  React.useEffect(()=>{
document.title=`${location} Weather To Go`

//api call to go here
  },[location])

  return (
    <div className="App">
      <h1> Weather To Go {location}</h1>
      <Entry setLocation={setLocation} />
      
    </div>
  );
}

export default App;
