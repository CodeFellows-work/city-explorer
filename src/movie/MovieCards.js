import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './movieCard.css'

class MovieCards extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="movieCard">
            <Card style={{width: '400px'}} bg='secondary' text='white'> 
                <Card.Body>
                    <Card.Text>{this.props.title}</Card.Text>
                    <Card.Text>{this.props.overview}</Card.Text>
                    {/* <Card.Img src={http://localhost:3000/movie/iLWsLVrfkFvOXOG9PbUAYg7AK3E.jpg />  */}
                </Card.Body>
            </Card>
            </div> 
        )
    }

}
export default MovieCards; 