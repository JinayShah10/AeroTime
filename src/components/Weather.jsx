import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    async function getWeather() {
        try {
            if (!city) {
                alert("Please enter a city name");
                return;
            }

            console.log("Hitting weather endpoint...");
            const apiKey = "6e48ea4a4ff1441ea1c161537252008";
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
            console.log("Response status:", response.status);

            const data = await response.json();

            if (data.error) {
                setWeather(null);
                alert("City not found! Please enter a valid city name.");
                return;
            }

            setWeather({
                city: data.location.name,
                temp: data.current.temp_c,
                condition: data.current.condition.text,
                humidity: data.current.humidity
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='weather-container'>
            <h2 className="weather-heading">Weather and AQI</h2>
            <div className="weather">
                <div className="data_card">
                    <input
                        id='input_text'
                        type="text"
                        placeholder='Enter City Name'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className='weather-button' onClick={getWeather}>
                        Get Weather
                    </button>

                    <div className="weather-results">
                        {weather ? (
                            <>
                                <p><strong>City:</strong> {weather.city}</p>
                                <p><strong>Temperature:</strong> {weather.temp}°C</p>
                                <p><strong>Condition:</strong> {weather.condition}</p>
                                <p><strong>Humidity:</strong> {weather.humidity}%</p>
                            </>
                        ) : (
                            <p>Enter City Name to Generate Weather Details</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Weather;
