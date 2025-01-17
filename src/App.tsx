import { Component, createSignal, createEffect, Show } from 'solid-js';
import { faEllipsisV, faCloudRain, faDroplet } from '@fortawesome/free-solid-svg-icons';
import InputForm from './components/InputForm';
import { countryToAlpha2, countryToAlpha3 } from "country-to-iso"
import Fa from 'solid-fa';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Card  from './components/Card';
const [ weather, setWeather ] = createSignal([]);
const [ city, setCity ] = createSignal('Enugu');



const App: Component = ({}) => {

  createEffect(async() =>{
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=c52e71c1cbfd470c826172901251501&q=${city()}`)
    const data = await res.json()
    setWeather(data);
    // console.log(weather())

  })


  let tm = new Date();
  let time_now = tm.toLocaleTimeString("en-US", {hour:"2-digit", minute: "2-digit"});

  return (
    <div style="padding-top: 6rem;" >
      
      <div class="d-flex flex-column align-items-center">
    <InputForm />
    <div class=" cust-card card m-auto" style="width: 20rem">
      {/* <div class="card-header"></div> */}
      <div class="card-body cust-card-body">
        <div class="city-div d-flex">
          <span class="cust-city-icon">{city()} <span class="cust-country-icon">| 
          {countryToAlpha3(weather()?.location?.country)}
             </span></span>
          <span class="time-span"><span>
            {new Date(weather()?.location?.localtime.toString()).toLocaleTimeString("en-US", {hour:"2-digit", minute: "2-digit"})}
            
            </span><span>
            {/* <Fa icon={faEllipsisV}/> */}
            
            </span></span>
        </div>

        <div class="m-auto weather-cond flex-column d-flex align-items-center">

          <div>
            {/* <Fa icon={faCloudRain} class="display-6 mt-5"/> */}
          <img class="w-1" src={weather()?.current?.condition?.icon} alt="" /></div>
          <div class="temp-div">
            <h1 class="display-1" style="margin-left: 20px; margin-bottom: 0">
            <Show when={weather()} fallback={<>Loading...</>}>
            <>{weather()?.current?.temp_c}</>
            </Show>
              

              <span style="font-weight: 200; font-size: 5.7rem; line-height: 0;">&#176;</span></h1>
          </div>
          <div class="current-condition">
            <p>{weather()?.current?.condition?.text}</p>
          </div>
          
        </div>

        <div class="wind-div d-flex justify-content-between">
          <div class="wind"><span>Wind:</span> {weather()?.current?.wind_kph}km/h</div>
          <div class="humidty">
            <span><Fa icon={faDroplet} class="color"/> </span>
            <span>{weather()?.current?.humidity}%</span>
          </div>
        </div>

      </div>
    </div>
    </div>
    </div>
  );
};

export { city, setCity, weather, setWeather}
export default App;
