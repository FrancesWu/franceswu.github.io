import React from 'react';
import PropTypes from "prop-types";

export default function TimelineCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <span>{props.time}</span>
            <div>{props.description}</div>
        </div>
    );
};

TimelineCard.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string
};