import React from "react";
import {Card} from "react-bootstrap";
import styles from "./card.module.css";

export const CharacterCard = ({img, name}) => {
    return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>


} 