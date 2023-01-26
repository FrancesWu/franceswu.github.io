import React from 'react';
import TimelineCard from './TimelineCard';

export default function Timeline(props) {
    const timelineEvents = [
        {
            title: "student",
            time: "2014~2018",
            description: "being a student",
        },
        {
            title: "worker",
            time: "2018~2023",
            description: "being a worker",
        }
    ];
    const timelineCards = timelineEvents.map(
        (event) => {
            return (
                <TimelineCard
                    title={event.title}
                    time={event.time}
                    description={event.description}
                />
            )
        }
    )
    console.log(timelineEvents);
    return (
        <div className='timeline'>
            <ul>{timelineCards}</ul>
        </div>
    );
}