import React from "react";
import { Card } from 'reactstrap';

const DayDetails = props => {

    return (
        <Card>
            <h2>Detailed Weather info for {props.day}:</h2>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
            <p><strong>High: </strong>{props.high}&deg;</p>
            <p><strong>Low: </strong>{props.low}&deg;</p>
            <p><strong>Precipitation: </strong>{props.precip}</p>
            <p><strong>Wind Speed: </strong>{props.windSpeed}</p>
            <p><strong>Wind Direction: </strong>{props.windDir}</p>
        </Card>
    );
}

export default DayDetails;