
import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import WeatherCards from './weather/WeatherCards'; 
import MovieCards from './movie/MovieCards'
import './location.css'


const API_KEY = process.env.REACT_APP_API_KEY; 

class LocationForm extends React.Component{ 
    constructor() {
        super();
    this.state = {
        data: [],
        map: '',
        weather: [],
        search: '',
        movie:[],  
        }
    }


componentDidMount = () => {
    this.getLocation();
}     
getLocation = async (e) => {
    let response = await axios.get(`http://localhost:3000/location?search=${this.state.search}`)
    .then(response => {
        this.setState({data: response.data[0]})
        this.getMap()
        this.getWeather() 
        this.getMovie()
    })
    console.log(response); 
}
getWeather = async (e) => {
    let response = await axios.get(`http://localhost:3000/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`)
        this.setState({weather: response.data});
}
getMap = async (e) => {
        this.setState({map:`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.state.data.lat},${this.state.data.lon}&zoom=15`});       
}
getMovie = async (e) => {
    let response = await axios.get(`http://localhost:3000/movie?query=${this.state.search}`)
        this.setState({movie: response.data});
}

render() {
    console.log(this.state);
    // console.log(this.state.movie.results);
    console.log(this.state.weather);

    return(
        
        <div id="formSearchLoc">
        <Form style={{marginTop: '25%'}}>
            <Form.Label style={{color: 'white',fontSize:'70pt'}}>City Explorer</Form.Label>
            <Form.Control size="large" onChange={(e) => this.setState({search: e.target.value})} placeholder='Enter Location' type='text' />
            <Button variant='primary' onClick={this.getLocation}> Get Location </Button> 
            <Form.Text>
            <div>{this.state.data.display_name ? <div>{this.state.data.display_name}, {this.state.data.lat},{this.state.data.lon}</div> : ''}</div>
            </Form.Text>
            <div>
                {this.state.map ? <img src={this.state.map} alt='static map'/>  : '' } 
            </div>
            <div>
                {this.state.weather.map(item => { return <WeatherCards date={item.date} description ={item.description}/> })}
            </div>  
            <div>
                {this.state.movie.map(item => { return<div>Check Out Some Movies:<MovieCards title={item.title} src={item.poster_path} overview = {item.overview}/></div> })}
            </div>           
        </Form>
        </div>
    );
}
}
export default LocationForm; 