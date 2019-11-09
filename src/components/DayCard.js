import React from "react";
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const DayWrapper = styled.article`
    .card{
        border: ${props => props.isActive ? "2px solid teal" : "1px solid yellow"}
        text-align: center;
    }
    img {
        width: 75px;
    }
`

const DayCard = props => {

    return (
        <Col onClick={props.setSelectedDay}>
            <DayWrapper isActive={props.isActive}>
                <Card >
                    <CardHeader>{props.day}</CardHeader>
                    <CardBody>
                        <h2>{props.current}&deg;</h2>
                        <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                        <p><strong>High: </strong>{props.high}&deg;</p>
                        <p><strong>Low: </strong>{props.low}&deg;</p>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    );
}

export default DayCard;