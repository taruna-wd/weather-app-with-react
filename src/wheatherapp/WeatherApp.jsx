import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "pune",
        description: "broken clouds",
        feels_like: 305.17,
        humidity: 55,
        season: "Clouds",
        temp: 303.23,
        // time: 19800,
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo)
    }

    const handleSearchSubmit = (newInfo) => {
        // Fetch weather data for the new city
        // This is a placeholder for fetching data, replace with actual API call
        
        setWeatherInfo(newInfo);
    };

    return (
        <div className=" md:m-auto md:rounded-lg   text-center md:w-2/4  w-full  " >
         
            <Search updateInfo={updateInfo} />
            <Weather weatherInfo={weatherInfo} />
        </div>
    );
}
