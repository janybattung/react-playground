import React from 'react';
import './_Bubbles.css';
import makeNullsArray from './_makeNullsArray';
import Bubble from './_Bubble';
import BubblesContainer from './_BubblesContainer';
/* other imports not shown */

export default function Bubbles(props) {
    const array = makeNullsArray(props.numberOfBubbles);

    const bubbles = array.map((_,i) =>
        <Bubble key={i} num={i} />
    )
    return (
        <BubblesContainer>
            {bubbles}
        </BubblesContainer>
    )
}