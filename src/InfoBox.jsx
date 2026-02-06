import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) { 
  
  const INIT_URL = "https://media.istockphoto.com/id/641051864/photo/dusty-shore.webp?a=1&b=1&s=612x612&w=0&k=20&c=8jQRlqKi3eFBeIj023xbrKakWmP2aglxhbEngd9fe6E=";
  const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity> 80 ? <p><ThunderstormIcon style={{ fontSize: 40, color: 'black' }} /></p>: info.temp > 15 ? <p><SunnyIcon style={{ fontSize: 40, color: 'orange' }} /></p> : <p><AcUnitIcon style={{ fontSize: 40, color: 'grey' }} /></p>}
        {/* title="green iguana" */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          {info.weather}
          <p>Temperature  = {info.temp}&deg; C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min_Temp = {info.tempMin}</p>
          <p>Mxn_Temp = {info.tempMax}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg; C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

            
            
        </div>
        
    )
}