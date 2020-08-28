import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            price: this.props.price,
            image: this.props.image,
            description: this.props.description
        }
    }
    
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}</h3>
                <h3>{this.props.price}</h3>
                <img src={this.props.image} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}