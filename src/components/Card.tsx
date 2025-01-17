import { Component, createEffect, createSignal } from 'solid-js';

// import { Weather } from './InputForm';


type Weather = {
  location: {
    name: string
    country: string
    localtime: string
  },
  current: {
    temp_c: string
    condition: {
      text: string
      icon: string
    }
    wind_kph: string
    humidity: string
  }
}

interface Props {
  item: Weather
}



const Card: Component = () => {
  
  
  
  return (
   <></>
  )
}

// export { setWeather }
export default Card;