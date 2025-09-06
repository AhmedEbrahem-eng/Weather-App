import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { FiSun } from 'react-icons/fi';
import { BsEye, BsSunrise, BsSunset } from 'react-icons/bs';

const WeatherDetails = ({ current, forecast }) => {
    if (!current || !forecast) return null;

    const { astro } = forecast.forecastday[0];

    return (
        <div className="weather-details">
            <h2>Weather Details</h2>
            <div className="details-grid">
                <div className="detail-box">
                    <WiHumidity className="detail-icon" />
                    <div className="detail-text">
                        <p>Humidity</p>
                        <h3>{current.humidity}%</h3>
                    </div>
                </div>
                <div className="detail-box">
                    <WiStrongWind className="detail-icon" />
                    <div className="detail-text">
                        <p>Wind</p>
                        <h3>{current.wind_kph} km/h</h3>
                    </div>
                </div>
                <div className="detail-box">
                    <BsEye className="detail-icon" />
                    <div className="detail-text">
                        <p>Visibility</p>
                        <h3>{current.vis_km} km</h3>
                    </div>
                </div>

                <div className="detail-box">
                    <FiSun className="detail-icon" />
                    <div className="detail-text">
                        <p>UV Index</p>
                        <h3>{current.uv}</h3>
                    </div>
                </div>
                <div className="detail-box">
                    <BsSunrise className="detail-icon" />
                    <div className="detail-text">
                        <p>Sunrise</p>
                        <h3>{astro.sunrise}</h3>
                    </div>
                </div>
                <div className="detail-box">
                    <BsSunset className="detail-icon" />
                    <div className="detail-text">
                        <p>Sunset</p>
                        <h3>{astro.sunset}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
