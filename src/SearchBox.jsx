
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7ca7756a3c8ca3e615a69378d7d893ce";
     
    
        let getWeatherInfo = async () => {
        try{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse =await response.json();
     console.log(jsonResponse);

     let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax:jsonResponse.main.temp_max, 
        tempMin:jsonResponse.main.temp_min, 
        humidity:jsonResponse.main.humidity, 
        feelsLike:jsonResponse.main.feels_like,       
        weather:jsonResponse.weather[0].description,       

     };
     console.log(result);
     return result;
      } catch(err) {
        throw err;
    }
    };
        
   
    

    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
        evt.preventDefault();
        let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
        console.log(city);
        setCity("");
       
        } catch(err){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'> 
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" color="success" required value={city} onChange={handleChange} />
            <br></br><br></br>
            <Button variant="contained" type='submit' >
        Search
      </Button>

      {error && <p style={{color: "red"}}>No such place exits in  our App</p>}
      </form>
        </div>
    );
}