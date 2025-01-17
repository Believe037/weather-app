import { Component, createSignal, createEffect } from 'solid-js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { titleCase } from 'title-case';
import { city, setCity } from '../App';




const InputForm: Component = () => {

  const fetchCityName = (e: Event) => {
    const cityName = document.querySelector("#city-name") as HTMLInputElement
    setCity(titleCase(cityName.value));
    e.preventDefault();
  }
 

  return (
    <div class="m-atuo" style="width: 20rem">
      <div class="card-body">
      <form class="form-inline" onSubmit={(e) => fetchCityName(e)}>
        <div class="form-group">
        <span class="d-flex">
          <input type="text" class="form-control cust-radius-input" id="city-name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter city, ex. new york" /><span class="input-group-text btn-div cust-radius-btn" id="inputGroup-sizing-default">
            <button class="btn btn-primary cust-btn-check">Check</button>
          </span>
        </span>
        </div>
      </form>
      </div>
    </div>
  )
}


export default InputForm;