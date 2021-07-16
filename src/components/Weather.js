import React from 'react';

const Weather = (props) => {
  return(
    <div className="container output">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 temperture-display text-center m-2">
            {props.city?(<h1 className="px-4">
            {props.city}, {props.country}       
          </h1>):null}
          <h3 className="px-4">{props.description}</h3>
          <h1 className="px-4 m-5"><i className={`wi ${props.weatherIcon} display-1`}></i></h1>
          {props.temp?( <h1 className="temperture my-2 display-1">{props.temp}&deg;</h1>):null}     
          {MinMaxTemp(props.temp_max, props.temp_min)}         
        </div>
        <div className="row justify-content-center align-item-center">
        <div className="col-md-4 extra-description text-center my-2 p-1">        
          {props.feels_like?(<h5 className="px-4"><span className="extra-description-span">Feels like</span>{props.feels_like}&deg;</h5>):null}
          {props.humidity?(<h5 className="px-4"><span className="extra-description-span">Humidity</span>{props.humidity} %</h5>):null}
          {props.pressure?(<h5 className="px-4"><span className="extra-description-span">Pressure</span>{props.pressure} inHg</h5>):null}          
        </div>
        </div>
        
      </div>      
    </div>
  )
}
function MinMaxTemp(max, min){
  if(max && min){
    return(
      <h3>
        <span className="px-4">Max {max}&deg;</span>
        <span className="px-4">Min {min}&deg;</span>
      </h3>
  
    )
  }
}

export default Weather;