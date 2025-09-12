import { FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <div className="header">
            <div className="logo">
                <FaMapMarkerAlt /> WeatherApp
            </div>
            <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                <span className="theme-toggle-icon">
                    {isDark ? <FaSun /> : <FaMoon />}
                </span>
                <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
        </div>
    );
};

export default Header;
