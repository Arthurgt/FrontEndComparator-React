import React, {useState} from 'react';
import './services.scss';
import Perf from 'react-addons-perf';

class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData:{},
            city:'',
            requestTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        }
    }
    
    componentDidMount() {
        this.setState({jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit});
        this.setState({totalJSHeapSize: window.performance.memory.totalJSHeapSize});
        this.setState({usedJSHeapSize: window.performance.memory.usedJSHeapSize});
    }

    getWeather = (event) => {
        Perf.start()
        if(event.key == "Enter") {
            fetch('http://api.weatherstack.com/current?access_key=fac98dbfc3b783480ba30acb554f1930&query='+this.state.city).then(
                response => response.json()
            ).then(
                data => {
                    this.setState({weatherData: data})
                    Perf.stop();
                    this.setState({requestTime: Perf.getInclusive()[0].inclusiveRenderDuration})
                    this.forceUpdate();
                }
            )
        }
    }

    render() {
       return( 
       <main className="services-main d-flex flex-column justify-content-center">
        <div className="container performance-measure text-center my-4 row">
            <h3 className="text-center">Performance measure:</h3>
            <p className="text-center">
                Request time: {this.state.requestTime} ms
            </p>
            <p className="text-center">
                The maximum size of the heap: {this.state.jsHeapSizeLimit} bytes
            </p>
            <p className="text-center">
                The total allocated heap size: {this.state.totalJSHeapSize} bytes
            </p>
            <p className="text-center">
                The currently active segment of JS heap: {this.state.usedJSHeapSize} bytes
            </p>
        </div>
        <div className="container ">
          <div className="column">
            <div className="row">
              <h3 className="text-center my-4">Search for Weather:</h3>
              <input className="form-control" 
                         type="text" 
                         id="weatherLocation" 
                         aria-describedby="weatherLocation" 
                         placeholder="Please input a Location" 
                         onChange={e => this.setState({city: e.target.value})}
                         value={this.state.city}
                         onKeyPress={this.getWeather}
                         />
            </div>
            {typeof this.state.weatherData.current == 'undefined' ? (
                <div className="text-center my-4 row">
                    <h3 className="text-center">Weather Details:</h3>
                    <p className="text-center">
                        Feels Temperature: type a city
                    </p>
                    <p className="text-center">
                        Real Temperature: type a city
                    </p>
                    <p className="text-center">
                        Wind Speed: type a city
                    </p>
                    <p className="text-center">
                        Location Searched: type a city
                    </p>
                </div>                
            ) : (
                <div className="text-center my-4 row">
                    <h3 className="text-center">Weather Details:</h3>
                    <p className="text-center">
                        Feels Temperature: {this.state.weatherData.current.feelslike}
                    </p>
                    <p className="text-center">
                        Real Temperature: {this.state.weatherData.current.temperature} 
                    </p>
                    <p className="text-center">
                        Wind Speed: {this.state.weatherData.current.wind_speed}
                    </p>
                    <p className="text-center">
                        Location Searched: {this.state.weatherData.location.name} from {this.state.weatherData.location.country}
                    </p>
                </div>
            )}
          </div>
        </div>
      </main>
       )
    }
}

export default Services;