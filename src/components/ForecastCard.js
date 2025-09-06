
const ForecastCard = ({ data }) => {
    return (
        <div className="forecast-day">
            <p>{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img src={data.day.condition.icon} alt={data.day.condition.text} />
            <p>{data.day.condition.text}</p>
            <div className="temp-range">
                <span>{Math.round(data.day.maxtemp_c)}°C</span>
                <span>{Math.round(data.day.mintemp_c)}°C</span>
            </div>
        </div>
    );
};

export default ForecastCard;
