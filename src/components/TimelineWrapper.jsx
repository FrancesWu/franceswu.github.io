import React from "react";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";
import { useState, useEffect } from "react";
import timelineData from "../data/timelineData.json";

export default function TimelineWrapper(props) {
    console.log(timelineData);
    const customTheme = {
        borderDotColor: '#ffffff',
        descriptionColor: '#262626',
        dotColor: '#d0cdc4',
        eventColor: '#965500',
        lineColor: '#d0cdc4',
        subtitleColor: '#7c7c7c',
        titleColor: '#405b73',
        yearColor: '#405b73',
    };
    return (
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="11/2010 – Present"
                style={{ color: '#e86971' }}
            >
                <h3>Title, Company</h3>
                <h4>Subtitle</h4>
                <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                </p>
                <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                </p>
                <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                </p>
            </TimelineItem>
        </Timeline>
    );
}