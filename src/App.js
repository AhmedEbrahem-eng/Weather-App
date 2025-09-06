import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherDetails from './components/WeatherDetails';
import { getWeatherData } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (location) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherData(location);
      setWeather(data);
    } catch (err) {
      setError('Location not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} isLoading={loading} />
      {error && <div className="error-message">{error}</div>}
      {weather && (
        <>
          <CurrentWeather data={weather} />
          <Forecast forecast={weather.forecast} />
          <WeatherDetails current={weather.current} forecast={weather.forecast} />
        </>
      )}
    </div>
  );
}

export default App;
