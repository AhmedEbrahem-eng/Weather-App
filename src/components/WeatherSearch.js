import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const WeatherSearch = ({ onSearch, isLoading }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                onSearch(`${position.coords.latitude},${position.coords.longitude}`);
            });
        }
    };

    return (
        <div className="search-section">
            <div className="logo">
                <FaMapMarkerAlt /> WeatherApp
            </div>
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-container">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Search for a location..."
                        disabled={isLoading}
                    />
                    <button type="button" onClick={handleLocationClick} className="location-btn">
                        <FaMapMarkerAlt />
                    </button>
                    <button type="submit" disabled={isLoading || !city.trim()} className="search-btn">
                        <FaSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WeatherSearch;
