
import axios from 'axios';
import React from 'react';


// import Form from 'react-bootstrap/Form';


const API_KEY = process.env.REACT_APP_API_KEY; 

class LocationForm extends React.Component{ 
    constructor() {
        super();
    this.state = {
        data: [], 
        location: {}, 
        search: '',
    }
  }

setLocation = (locationObj) => {
    this.setState({location: locationObj }, () => console.log(this.state));
}
fetchLocation = async () => {
    let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.search}&format=json`);
    this.setLocation(response.data[0]); 
}

render() {
    return(
        <div className='locationForm'>
            <input onChange={(e) => this.setState({search: e.target.value})} type='text' /> 
            <button onClick={this.fetchLocation}>Explore!</button>
            <div>{this.state.location.display_name ? <img src={this.state.location.icon} alt={this.state.location.display_name} /> : ''}</div>
        </div>
    );
    }
}
export default LocationForm; 