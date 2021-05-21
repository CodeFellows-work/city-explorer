
import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 



// import Form from 'react-bootstrap/Form';


// const API_KEY = process.env.REACT_APP_API_KEY; 
// const WEATHER_KEY = process.env.API_APP_WEATHER_KEY; 
class LocationForm extends React.Component{ 
    constructor() {
        super();
    this.state = {
        data: [],
        map: null,
        weather: {},
        search: '',
        movie: null,  
        }
    }


componentDidMount = () => {
    this.getLocation();
}     
getLocation = async (e) => {
    let response = await axios.get(`http://localhost:3000/location?search=${this.state.search}`)
    .then(response => {
        this.setState({data: response.data[0],})
        this.getWeather() 
        this.getMap()
        this.getMovie()
    })
    console.log(response); 
}
getWeather = async (e) => {
    let response = await axios.get(`http://localhost:3000/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`)
        this.setState({weather: response.data[0]});
    console.log(response);
}
getMap = async (e) => {
    let response = await axios.get(`http://localhost:3000/map?lat=${this.state.data.lat}&lon=${this.state.data.lon}`)
        this.setState({map: response.data[0]})
}
getMovie = async (e) => {
    let response = await axios.get(`http://localhost:3000/movie?search=${this.state.search}`)
        this.setState({movie: response.data[0]})
}
// renderWeather = () => {
//     let weatherArray = [];
//     for(let i =0; i<this.state.weather.data; i++){
//         weatherArray.push(this.state.weather.data[i]); 
//     }
//     return weatherArray; 
// }

render() {
    console.log(this.state);
    return(
        <>
        <Form>
            <Form.Label>City Explorer</Form.Label>
            <input onChange={(e) => this.setState({search: e.target.value})} placeholder='Enter Location' type='text' />
            <Button variant='outline-primary' onClick={this.getLocation}> Get Location </Button> 
            <Form.Text>
            <div>{this.state.data.display_name ? <div>{this.state.data.display_name}, {this.state.data.lat},{this.state.data.lon}</div> : ''}</div>
            </Form.Text>
            <img src={this.state.map ? this.state.map : null} alt="Location Map" />
            <Form.Text>
            <ul>{this.state.weather.date ? <div>{this.state.weather.date}, {this.state.weather.description}</div> : ''}</ul>
            </Form.Text>
            
        </Form>
        </>
    );
}
}
export default LocationForm; 