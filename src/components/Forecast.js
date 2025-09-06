import React from 'react';

const Forecast = ({ forecast }) => {
    if (!forecast?.forecastday) return null;


    return (
        <div className="forecast">
            {forecast.forecastday.map((day) => (
                <div key={day.date} className="forecast-day">
                    <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    <img 
                        src={day.day.condition.icon.replace('64x64', '128x128')}
                        alt={day.day.condition.text}
                    />
                    <p className="condition">{day.day.condition.text}</p>
                    <div className="temp-range">
                        <span>{Math.round(day.day.maxtemp_c)}°C</span>
                        <span>{Math.round(day.day.mintemp_c)}°C</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Forecast;
