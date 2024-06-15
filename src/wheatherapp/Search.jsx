import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Search( {updateInfo}) {
  let [city, setCity] = useState("");

  let [error, setError] = useState(false)

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0a30a5d2501b3e6ef4aea60259059403";

  let weatherInfo =  async() => {
    try {
        
       let responce =await fetch( `${API_URL}?q=${city}&appid=${API_KEY}&appid=`)
       let jsonResponse = await responce.json();

       console.log(jsonResponse)
       let result ={
        city : city,
        temp : jsonResponse.main.temp,
        feels_like : jsonResponse.main.feels_like,
        humidity : jsonResponse.main.humidity,
        description: jsonResponse.weather[0].description,
        season : jsonResponse.weather[0].main,
        // time : jsonResponse.timezone 

       }
       console.log(result)
       return result

        
    } catch (error) {
         throw error
    }
       
  };
  let searchHandle = (event) => {
    setCity(event.target.value);
  };
  let submitForm =  async(event) => {
    try {
        event.preventDefault(); // for submit
        console.log(city);
        setCity("");
         let newInfo = await weatherInfo()
         updateInfo(newInfo)
    ;
    } catch (error) {
        setError(true)
    }
     };
  return (
    <Box>
      <div className="search  flex items-center justify-between flex-col place-content-center w-2/4">
      <div>
        <h2 className="text "> Weather App</h2>
      </div>
            <div className="search ">
          <form action=" " onSubmit={submitForm} className="flex justify-between my-5 ">
            <TextField
              id="city"
              label="City Name"
              variant="outlined"
              onChange={searchHandle}
              value={city}
              required
              className="w-full "
              
            /> 
            <Button variant="contained"  className="btn" type="submit" endIcon={<SearchIcon />}>
              {" "}
              Search
            </Button>
          </form >

        </div>
        {error && <p style={{color:"red"}}> no such place exists </p>}
       
      </div>
    </Box>
  );
}
