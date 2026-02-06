import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState ({
        city:"Tumkur",           
        feelsLike:18.83,
        humidity:50,
        temp:19.52,
        tempMax:19.52,
        tempMin:19.52,
        weather:"clear sky" 
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Globel weather Application</h2>
            <SearchBox updateInfo = {updateInfo}/> 
            
            <InfoBox info = {weatherInfo} />
        </div>
    );
}