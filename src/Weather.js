import React from 'react';
import axios from 'axios'; 
import Button from 'react-bootstrap/Button'; 

class Weather extends React.Component {
    constructor(props) {
        super(props); 
        this.state={ 
            weather:[],
            
        }
    }
    
    getWeather= async () => {
        const API = 'http://localhost:3000'; 
        const weather = await axios.get(`${API}/weather`);
        this.setState({ weather: weather.data}); 
        
    }
    // handleWeather = (e) => {
    //     axios.get(`http://localhost:3000/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}&searchQuery=${this.props.search}`)
    //     .then(response => {
    //         let weather = response.data[0]; 
    //         this.setState({weather: weather
    //         })
    //     })
    //     .catch(error => {console.log("Error, can not be displayed")})
    // }

    render() {
        return(
        <>
        <Button onClick={console.log(this.state), this.getWeather}>Get Weather</Button>
        </>
        
        
        
        
        
        
        
        // <>
        //     <button onClick={this.getWeather}>Get Weather</button>
        //     {this.state.weather.length && this.state.weather.map((item, idx) => (
        //     <div key={idx}>
        //         {item}
        //     </div>
        //     ))}
        // </>
        )
    }
}
export default Weather; 