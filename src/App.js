
import React from 'react'; 
import './App.css';
import LocationForm from './LocationForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
