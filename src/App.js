
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css';
import './App.css';
import React from 'react';
import Form from './components/Form.component';

// const SECRET_KEY = REACT_APP_SECRET_KEY;


class App extends React.Component{
  constructor(){
    super();
  this.state={
    city:undefined,
    country:undefined,
    icon:undefined,
    main:undefined,
    description:"",
    temp:undefined,
    temp_max:undefined,
    temp_min:undefined,
    humidity:undefined,
    error:false
  };
    
    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }

  calTemperture(temp){
    let fahrenheit = Math.floor((temp-273.15) * 1.8 + 32);
    return fahrenheit;
  }
  calPressure(pressure){
    let inHg = Math.floor(pressure * 0.0295301);
    return inHg;
  }
  get_WeatherIcon(icons, rangeld){
    switch(true){
      case rangeld >= 200 && rangeld <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
        case rangeld >= 300 && rangeld <=321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
        case rangeld >= 500 && rangeld <=531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
        case rangeld >= 600 && rangeld <=622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
        case rangeld >= 701 && rangeld <=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        case rangeld === 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
        case rangeld >= 801 && rangeld <=804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        default:
          this.setState({icon:this.weatherIcon.Clouds});
    }
  }
  
  getWeather = async (e) => {    
    console.log(process.env.REACT_APP_API_KEY);
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_SECRET_KEY}`);
    const response = await api_Call.json();
    console.log(response);
    this.setState({
      city:`${response.name}`,
      country: response.sys.country,
      temp:this.calTemperture(response.main.temp),     
      temp_max:this.calTemperture(response.main.temp_max),
      temp_min:this.calTemperture(response.main.temp_min),
      description:response.weather[0].description,
      feels_like:this.calTemperture(response.main.feels_like),
      humidity:response.main.humidity,
      pressure:this.calPressure(response.main.pressure),    
      
    })
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    
  };  
  render(){
    return(
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city} country={this.state.country}temp={this.state.temp}temp_max={this.state.temp_max}temp_min={this.state.temp_min}description={this.state.description}feels_like={this.state.feels_like}humidity={this.state.humidity}pressure={this.state.pressure}weatherIcon={this.state.icon}/>
      </div>
    );
    
  }     
  
}




export default App;
