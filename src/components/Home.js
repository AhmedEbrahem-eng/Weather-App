import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaCloud, 
  FaSun, 
  FaCloudRain, 
  FaSnowflake, 
  FaWind, 
  FaThermometerHalf,
  FaEye,
  FaTint,
  FaMapMarkerAlt,
  FaSearch
} from 'react-icons/fa';

const Home = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <FaThermometerHalf />,
      title: "Real-time Temperature",
      description: "Get accurate current temperature and feels-like readings"
    },
    {
      icon: <FaCloud />,
      title: "Weather Forecast",
      description: "5-day detailed weather forecast with hourly updates"
    },
    {
      icon: <FaWind />,
      title: "Wind & Humidity",
      description: "Comprehensive weather details including wind speed and humidity"
    },
    {
      icon: <FaEye />,
      title: "Visibility & Pressure",
      description: "Atmospheric pressure and visibility information"
    }
  ];

  const weatherIcons = [
    <FaSun className="weather-icon sun" />,
    <FaCloud className="weather-icon cloud" />,
    <FaCloudRain className="weather-icon rain" />,
    <FaSnowflake className="weather-icon snow" />
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-name">WeatherApp</span>
          </h1>
          <p className="hero-subtitle">
            Get accurate weather information for any location worldwide
          </p>
          <div className="search-prompt">
            <FaSearch className="search-icon" />
            <span>Search for a city or location above to get started</span>
          </div>
        </div>
        
        {/* Animated Weather Icons */}
        <div className="weather-icons-container">
          {weatherIcons.map((icon, index) => (
            <div 
              key={index} 
              className="floating-icon"
              style={{ 
                animationDelay: `${index * 0.5}s`,
                left: `${20 + index * 20}%`,
                top: `${30 + (index % 2) * 20}%`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Why Choose WeatherApp?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-section">
        <h2 className="section-title">Weather Data You Can Trust</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Real-time Updates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Countries Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5-Day</div>
            <div className="stat-label">Forecast Range</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <FaMapMarkerAlt className="cta-icon" />
          <h2>Ready to Check the Weather?</h2>
          <p>Search for any location to get detailed weather information</p>
          <div className="cta-features">
            <span className="cta-feature">🌡️ Temperature</span>
            <span className="cta-feature">🌤️ Conditions</span>
            <span className="cta-feature">💨 Wind Speed</span>
            <span className="cta-feature">💧 Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
