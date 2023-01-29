
import React from 'react';
import "../styles/Content.scss";
import Cover from './Cover';
import TimelineWrapper from './TimelineWrapper';
import About from './About';
import BeyondWork from './BeyondWork';
import Contact from './Contact';

const Contents = () => {
    return (
        <div>
            <Cover />
            <About />
            <TimelineWrapper />
            <BeyondWork />
            <Contact />
        </div>
    )
}

export default Contents