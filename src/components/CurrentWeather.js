import { WiThermometer, WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { FiSun } from 'react-icons/fi';

const CurrentWeather = ({ data }) => {
    if (!data) return null;

    const { location, current } = data;

    return (
        <div className="current-weather">
            <div className="location">
                <h2>{location.name}</h2>
                <p>{location.region}, {location.country}</p>
            </div>

            <div className="weather-icon">
                <img 
                    src={current.condition.icon.replace('64x64', '128x128')}
                    alt={current.condition.text}
                    style={{ width: '120px', height: '120px' }}
                />
            </div>
            
            <div className="main-temp">
                <h1>{current.temp_c}°C</h1>
                <p>{current.condition.text}</p>
            </div>

            <div className="weather-stats">
                <div className="stat-item">
                    <WiThermometer />
                    <span>Feels like: {current.feelslike_c}°C</span>
                </div>
                <div className="stat-item">
                    <WiStrongWind />
                    <span>{current.wind_kph} km/h</span>
                </div>
            </div>

            <div className="weather-stats">
                <div className="stat-item">
                    <WiHumidity />
                    <span>{current.humidity}%</span>
                </div>
                <div className="stat-item">
                    <FiSun />
                    <span>UV: {current.uv}</span>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
