
import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

// import Form from 'react-bootstrap/Form';


const API_KEY = process.env.REACT_APP_API_KEY; 

class LocationForm extends React.Component{ 
    constructor() {
        super();
    this.state = {
        data: [], 
        location: {}, 
        search: '',
        map: null,  
    
        }
    }

handleFunction = (e) => {
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.search}&format=json`)
        .then(response => {
            let location = response.data[0]; 
            this.setState({
                location: location,
                map: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=15`
            })
        })
        .catch(error => {console.log("Error, can not be displayed")})
    }
handleRegion2 = (e) => {
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.search}&format=json`)
        .then(response => {
            let location = response.data[0]; 
            this.setState({
                location: location,
                map: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=15`
            })
        })
        .catch(error => {console.log("Error, can not be displayed")})
    }

render() {
    return(
        
        <div className='locationForm'>
            <Form>
                <Form.Label>Search Location: 
                    <input onChange={(e) => this.setState({search: e.target.value})} placeholder = 'Input a Location' type='text' /> 
                </Form.Label>
                <Button variant="outline-primary" type="button" onClick={this.handleFunction, this.handleRegion2}>Explore</Button>
                <Form.Text>
                    <div id="locationTitle">{this.state.location.display_name ? <div>{this.state.location.display_name}, {this.state.location.lat}, {this.state.location.lon}</div> : ''}</div>
                </Form.Text>
                <img src={this.state.map ? this.state.map : null} alt="Location-Map" /> 
            </Form>
        </div>
        
    );
    }
}
export default LocationForm; 