import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;

export const getWeatherData = async (location) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchLocations = async (query) => {
    if (!query || query.length < 2) return [];
    
    try {
        const response = await axios.get(
            `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
        );
        return response.data;
    } catch (error) {
        console.error('Error searching locations:', error);
        return [];
    }
};
