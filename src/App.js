import './App.css';
import WeatherCard from './components/WeatherCard';
import cities from 'cities.json';

console.log(JSON.stringify(cities));

await fetch('https://api.openweathermap.org/data/2.5/weather?lat=25.5922166&lon=85.12761069999999&units=metric&APPID=204ea2dce2ab661c1e16b37a6bc4fe0b')
      .then(res => res.json())
      .then(result => {
        // setData(result)
        console.log(result);
      });
      
function App() {
  return (
    <div className="App">
      <h1 className='text-center my-3'>Weather Data</h1>
      <WeatherCard/>
    </div>
  );
}

export default App;
