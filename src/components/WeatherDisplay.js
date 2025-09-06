import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { BsSunrise} from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) return null;

    const { location, current, forecast } = weatherData;

    return (
        <div className="weather-display">
            <div className="location">
                <h2>{location.name}</h2>
                <p>{location.region}, {location.country}</p>
            </div>
            
            <div className="current-weather">
                <div className="main-temp">
                    <h1>{current.temp_c}°C</h1>
                    <p>{current.condition.text}</p>
                </div>
                <div className="feels-like">
                    <p>Feels like: {current.feelslike_c}°C</p>
                    <p>Wind: {current.wind_kph} km/h</p>
                </div>
            </div>

            <div className="forecast">
                {forecast?.forecastday?.map((day) => (
                    <div key={day.date} className="forecast-day">
                        <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                        <img src={day.day.condition.icon} alt={day.day.condition.text} />
                        <p>{day.day.condition.text}</p>
                        <div className="temp-range">
                            <span>{Math.round(day.day.maxtemp_c)}°C</span>
                            <span>{Math.round(day.day.mintemp_c)}°C</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="weather-details">
                <h3>Weather Details</h3>
                <div className="details-grid">
                    <div className="detail-item">
                        <WiHumidity className="detail-icon" />
                        <div>
                            <p>Humidity</p>
                            <span>{current.humidity}%</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <WiStrongWind className="detail-icon" />
                        <div>
                            <p>Wind</p>
                            <span>{current.wind_kph} km/h</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <FiSun className="detail-icon" />
                        <div>
                            <p>UV Index</p>
                            <span>{current.uv}</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <BsSunrise className="detail-icon" />
                        <div>
                            <p>Visibility</p>
                            <span>{current.vis_km} km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
