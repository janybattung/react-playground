import React from 'react';

const BookCard = (props) => {
    return(
        <div className='card'>
          <img src={props.image} alt=""/>
          <div className="desc">
            <h2>{props.title}</h2>
            <h3>Author: {props.author}</h3>
            <h3>Price: {props.price}</h3>
            <p>Description: {props.description}</p>
          </div>
        </div>
    )
}

export default BookCard;