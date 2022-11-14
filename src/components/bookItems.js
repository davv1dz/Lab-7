import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class BookItems extends React.Component{
    render(){
        return(
            <div>
                <center>
                <Card style={{ width: '18rem' }}>
                <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                        <img src={this.props.book.cover}></img>
                        <footer>
                        {this.props.book.author}
                        </footer>
                        </blockquote>
                        <Button variant="primary">Learn more..</Button>
                    </Card.Body>
                 </Card>
                 <br/>
                 </center>
            </div>
        );
    }
}