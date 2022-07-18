import React from 'react'
import './App.css'
function DailyForecast() {
  return (
  
    <div className="future-forecast">
    <div className="today" id="current-temp">
       
        <div className="other">
            
            <div className="day">Monday</div>
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
    </div>

    <div className="weather-forecast" id="weather-forecast">
        <div className="weather-forecast-item">
            <div className="day">Tue</div>
            
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Wed</div>
           
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Thur</div>
           
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Fri</div>
            
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
        <div className="weather-forecast-item">
            <div className="day">Sat</div>
           
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
</div>
    <div className = "wave1"></div>
     <div className = "wave2"></div>
     <div className = "wave3"></div>
</div>

  )
}

export default DailyForecast

