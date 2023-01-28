// import React from 'react';
// import TimelineCard from './TimelineCard';

// export default function Timeline(props) {
//     const timelineEvents = [
//         {
//             title: "student",
//             time: "2014~2018",
//             description: "being a student",
//         },
//         {
//             title: "worker",
//             time: "2018~2023",
//             description: "being a worker",
//         }
//     ];
//     const timelineCards = timelineEvents.map(
//         (event) => {
//             return (
//                 <TimelineCard
//                     title={event.title}
//                     time={event.time}
//                     description={event.description}
//                 />
//             )
//         }
//     )
//     console.log(timelineEvents);
//     return (
//         <div className='timeline'>
//             <ul>{timelineCards}</ul>
//         </div>
//     );
// }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import  '../styles/App.scss';

const Timeline = ({ animate, children, className, lineColor }) => (
  <div className="timeline--wrapper">
    <div
      className={classNames(className, 'timeline', {
        'timeline--animate': animate,
      })}
      style={{ color: `${lineColor}` }}
    >
      {children}
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  lineColor: PropTypes.string,
  animate: PropTypes.bool,
};

Timeline.defaultProps = {
  animate: true,
  className: '',
  lineColor: '#000',
};

export default Timeline;