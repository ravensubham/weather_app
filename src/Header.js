import React, {useState } from 'react'
import DailyForecast from './DailyForecast';
import './App.css'



function Header() {
   
    const[city,setCity] = useState(null);
    const[search,setSearch] = useState({
        cities: "Mumbai"
    });
    
        
        async function fetchApi(e) {
           
           // e.preventDefault();
            const data = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${search.cities}&units=metric&appid=81e662f4552b99a82caaf17bdcc70921`
            )
           // const response = await fetch(url);
           // .then((res) => res.json())
            //.then((data) => data)

            const resJson = await data.json();

            setCity(resJson);
           
        }
        
      


      
    
    
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "cities"){
            setSearch({...search, cities: value})
        }

    }
    //current date and time
   const currentDate = new Date().toDateString();
  const currentTime = new Date().getHours()+':'+new Date().getMinutes();
  const hour = new Date().getHours();
    
    
  return (
    <>
  <DailyForecast  />

    <div className='body'>

    <div className="container">
        <div className="current-info">

            <div className="date-container">
                <div className="time" >
                  {currentTime} <span className="am-pm">{hour>= 12?'PM':'AM'}</span>
                </div>
                <div className="date" >
                {currentDate}
                </div>
</div>


 {!city ?(
    <p>No data Found</p>
 ): (

    
    <div>
<div className="temp" >
                    <h3>Temp:</h3><span>{city.main.temp}&#176; C</span>
                </div>

<div className="others">

<div className="weather-item">

<div>Maxm Temp</div> <div>{city.main.temp_max}&#176; C</div>

</div>

<div className="weather-item">

<div>Minm Temp</div> <div>{city.main.temp_min}&#176; C</div>

</div>

<div className="weather-item">

<div>Humidity</div> <div>{city.main.humidity}%</div>

</div>

<div className="weather-item"> 
<div>Pressure</div> <div>{city.main.pressure}mb</div>

</div>

<div className="weather-item"> 
<div>Wind Speed</div> <div>{city.wind.speed}km/hr</div>

</div>

</div>
</div>
        
 )}

            <div className="place-container">
            <div className='inputData'>
    <input  type="text" className='inputFeild' name="cities"
    onChange={(e) => handleChange(e)} 
    />
    </div>
             <div className="time-zone" >Asia/{search.cities}</div>
               <button className='getwheather'  onClick={(e) => fetchApi(e)}>Submit</button>
                <div  className="country">IN</div>
            </div>

        </div>

        </div>
     
       
        </div>
        </>
  )  
}

export default Header