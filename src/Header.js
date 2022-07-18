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

    
  return (
    <>
  <DailyForecast/>

    <div className='body'>

    <div className="container">
        <div className="current-info">

            <div className="date-container">
                <div className="time" >
                    12:30 <span className="am-pm">PM</span>
                </div>
                <div className="date" >
                    Monday, 25 May
                </div>
</div>


 {!city ?(
    <p>No data Found</p>
 ): (

    
    <div>
<div className="temp" >
                    <h3>Temp:</h3><span>{city.main.temp}</span>
                </div>

<div className="others" id="current-weather-items">

<div className="weather-item">

<div>Maxm Temp</div> <div>{city.main.temp_max}</div>

</div>

<div className="weather-item">

<div>Minm Temp</div> <div>{city.main.temp_min}</div>

</div>

<div className="weather-item">

<div>Humidity</div> <div>{city.main.humidity}</div>

</div>

<div className="weather-item"> 
<div>Pressure</div> <div>{city.main.pressure}</div>

</div>

<div className="weather-item"> 
<div>Wind Speed</div> <div>{city.wind.speed}</div>

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
               <button className='getwheather' onClick={(e) => fetchApi(e)}>Submit</button>
                <div  className="country">IN</div>
            </div>

        </div>

        </div>
     

        </div>
        </>
  )
}

export default Header