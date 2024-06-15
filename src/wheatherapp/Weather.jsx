import React, { useState ,useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardMedia from '@mui/material/CardMedia';
import Rainy from "../assets/rainy.avif"
import Winter from "../assets/winter.jpg"

import Sunny from "../assets/sunny day.jpg"


export default function Weather( {weatherInfo}) {
  let [date , setDate] = useState("")

const rain = Rainy
const winter = Winter
const sunny = Sunny

 
// function app(date) {
//    let d = new Date()
//   setDate(d.toLocaleString())
  
// }
useEffect(() => {
  const updateTime = () => {
    const d = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: true
    };
    setDate(d.toLocaleString('en-US', options));
  };

  updateTime();
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);


   
 
  return (
      <
    >
      <div className="">
        <div className="my-2">
        <button> Date- {date}</button>
        </div>
        
        <Card className="flex md:place-content-center flex-col md:mx-auto md:w-3/4 w-full  ">
        <CardMedia
        sx={{ height: 200 }}
        image={weatherInfo.humidity >= 50 ? rain : (weatherInfo.humidity  > 100)  ? winter: sunny   }
      
        title="green"
      />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div>
               {weatherInfo.city.charAt(0).toUpperCase()+weatherInfo.city.slice(1)}          
               <span style={{ }}>              {weatherInfo.humidity >= 50 ? <ThunderstormIcon/> : (weatherInfo.humidity  < 100)  ? < WbSunnyIcon />: <AcUnitIcon/>   }
               </span>    

            
              </div>

            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="my-1">Temperature <br /> 
             <span>{weatherInfo.temp}&deg;C</span> </div>
              <div className="my-1">How you feel <br />  <span>{weatherInfo.feels_like}</span></div>
              <div className="my-1">Humidity <br />  <span>{weatherInfo.humidity}</span></div>
              <div className="my-1">Description <br /> <span>{weatherInfo.description.charAt(0).toUpperCase()+weatherInfo.description.slice(1)}</span> </div>
              <div className="my-1">Season <br />  <span> {weatherInfo.season.charAt(0).toUpperCase()+weatherInfo.season.slice(1)}</span></div>
              {/* <div className="my-1">Time : {weatherInfo.time.toLocaleString()}</div> */}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
