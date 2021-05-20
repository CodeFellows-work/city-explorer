
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
        data: {},
        map: {},
        weather: {},
        search: '',  
        location: {}, 
        // location: {}, 
        // map: null,  
        // weather: null, 
        }
    }


componentDidMount = () => {
    this.getLocation();
    this.getWeather();
}     
getLocation = async (e) => {
    let response = await axios.get(`http://localhost:3000/location?search=${this.state.search}`);
    this.setState({
        data: response.data, 
    });
}
getWeather = async (e) => {
    let response = await axios.get(`http://localhost:3000/weather?search=${this.state.search}`)
    this.setState ({
        weather: response.data, 
    });
}

render() {
    return(
        <>
        <Form>
            <Form.Label>City Explorer</Form.Label>
            <input onChange={(e) => this.setState({search: e.target.value})} placeholder='Enter Location' type='text' />
            <Button variant='outline-primary' onClick={this.getLocation, this.getWeather}> Get Location </Button> 
            <Form.Text>
            <div>{this.state.data.display_name ? <div>{this.state.data.display_name}, {this.state.data.lat},{this.state.data.lon}</div> : ''}</div>
            </Form.Text>
            <div>{console.log(this.state.weather)}</div>
            <img src={this.state.map ? this.state.map : null} alt="Location Map" />
        </Form>
        </>
    );
}
}
export default LocationForm; 