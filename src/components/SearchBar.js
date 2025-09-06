import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { searchLocations } from '../services/weatherService';

const SearchBar = ({ onSearch, isLoading }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchTimeout = useRef(null);
    const suggestionsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = async (searchQuery) => {
        if (searchQuery.trim()) {
            setShowSuggestions(false);
            onSearch(searchQuery);
        }
    };

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        if (value.length >= 2) {
            searchTimeout.current = setTimeout(async () => {
                const results = await searchLocations(value);
                setSuggestions(results);
                setShowSuggestions(true);
            }, 300);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        const location = `${suggestion.name}, ${suggestion.country}`;
        setQuery(location);
        handleSearch(location);
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                onSearch(`${position.coords.latitude},${position.coords.longitude}`);
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <div className="search-section" ref={suggestionsRef}>
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-container">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        onFocus={() => query.length >= 2 && setShowSuggestions(true)}
                        placeholder="Search for a location..."
                        disabled={isLoading}
                        autoComplete="off"
                    />
                    <button type="button" onClick={handleLocationClick} className="location-btn">
                        <FaMapMarkerAlt />
                    </button>
                    <button type="submit" disabled={isLoading || !query.trim()} className="search-btn">
                        <FaSearch />
                    </button>
                </div>
            </form>
            {showSuggestions && suggestions.length > 0 && (
                <div className="suggestions-container">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={`${suggestion.id || index}-${suggestion.name}`}
                            className="suggestion-item"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            <FaMapMarkerAlt className="suggestion-icon" />
                            <span>{suggestion.name}, {suggestion.country}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
