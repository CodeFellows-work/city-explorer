
import React from 'react'; 
import './App.css';
import LocationForm from './LocationForm'; 

 

class App extends React.Component {
  constructor() {
    super(); 
  }


  render()  { 
    return (
      <div className="App">
        <LocationForm /> 
      </div>
    );
  }

}
export default App;
