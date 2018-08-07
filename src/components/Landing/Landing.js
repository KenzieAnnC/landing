import React, { Component } from 'react';
import "./Landing.css";
import { Jumbotron, Button } from 'reactstrap';
import quotes from "../../quotes.json";

class Landing extends Component {
    state = {
        quotes
    };
        
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="jumbo">
                        
                        <hr className="my-2" />
                        <p>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
                        <p className="lead">
                            <Button color="primary" handleClick = "">wow. that was terrible. show me another</Button>
                        </p>
                    </div>
                </Jumbotron>
            </div >
        );
    };
};

export default Landing;