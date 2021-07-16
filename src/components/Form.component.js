import React from 'react'

const Form = props =>{
  return(
    <div className="container form">
      <h1 className="heading mt-5">Check the Weather</h1>
      <div>{props.error ? error() : null}</div>
     <form onSubmit={props.loadweather}>
      <div className="row justtify-content-center align-items-center">
          <div className="col-md-12 text-center search-bar mt-5">
            <input type="text" className="form--control" name="city" autoComplete="off"/>         
          </div>        
          <div className="col-md-12 text-end">
            <button className="btn btn-light get-weather mt-2">Get Weather</button>        
          </div>
        </div>
     </form>
    </div>
  )
} 
function error(){ 
  return(
    <div className="alert alert-danger mx-5" role="alert">Please Enter City and Country</div>
  )
}
export default Form
