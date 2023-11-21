import React, { useState } from 'react'
import './Weather.css'
import cloud from "../../assets/cloud-sunimg.png"
import{FaSearch} from "react-icons/fa"
import{BsCloudDrizzleFill} from "react-icons/bs"
import{FaCloudRain} from "react-icons/fa"
import{BsCloudSnow} from "react-icons/bs"
import{BsFillCloudsFill} from "react-icons/bs"
import{BsWind} from "react-icons/bs"
import{WiHumidity}from "react-icons/wi"



const Weatherapp =  () => {
   let apikey ="d328b442e2a2c566d6fa42e0a3800201";
   // const[wicon,setwicon]=useState(cloud_icon);
   // if(data.weather[0].icon==="01d"){
   //    setwicon(clear)
   // }
   const search = async ()=>{
      const element=document.getElementsByClassName("city_input")
      if(element[0].value==="")
       {
         return 0;
       }
       console.log(element[0].value)
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`

      let response= await fetch(url);
      let data=await response.json();
      console.log(data);

   const humidity=document.getElementsByClassName("humidity_temp");
   const wind=document.getElementsByClassName("wind_rate");
   const temp=document.getElementsByClassName("city_temp");
   const location=document.getElementsByClassName("city_name");
   humidity[0].innerHTML=data.main.humidity+"%";
   wind[0].innerHTML=data.wind.speed+"km/hr";
   temp[0].innerHTML=`<h2>${data.main.temp+"&deg c"}</h2>`;
   location[0].innerHTML=`<h3>${data.name}</h3>`;


   }
   
   





  return (
    <div className='container'> 
        <div className='head_bar'>
            <div className='head_name'>
                <h2>Weather forecast</h2>
            </div>      
            <div className='head_search'>
                  <div className='head_searchinput'>
                     <input type="text" className='city_input' placeholder="search"/>
                  </div>
                  <div className='head_bar'>
                     <FaSearch className='head_baricon' onClick={search}/>
                  </div>
            </div>
        
            <div className='cityclimate'>
                 <img src={cloud}  alt="cloud image"/>             
            </div>

           <div className='city_temp'>
                <h2>15 &deg; c</h2>
           </div>

           <div className='city_name'>
                <h3>london</h3>
           </div>
           <div className='containers'>
               <div className='humidity'>
                
                  <div className='humidity_img'>
                      <WiHumidity className='humidity_imgicon'/>
                 </div>
                  <div className='elements'>
                      <div className='humidity_temp'>
                         <h2>87%</h2>
                      </div>
                      <div className='humidity_name'>
                         <h2>Humidity</h2>
                      </div> 
                   </div>
                </div>


                <div className='humidity'>
                
                  <div className='humidity_img'>
                     <BsWind className='wind_imgicon'/>
                  </div>
                  <div className='elements'>
                      <div className='wind_rate'>
                         <h2>5.14 km/h</h2>
                      </div>
                      <div className='humidity_name'>
                         <h2>Wind speed</h2>
                      </div> 
                  </div>
              </div>

           </div>  
       
       </div>
           
   </div>        
           
  )
}

export default Weatherapp