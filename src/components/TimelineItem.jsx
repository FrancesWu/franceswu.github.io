import React, { Component, Fragment } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/Timeline.scss';

export default function TimelineItem(props) {
    const {
        id,
        children,
        dateText,
        // dateComponent,
        className,
        visibilitySensorProps,
    } = props;
    const [visible, setVisibility] = useState(false);
    const onVisibilitySensorChange = (isVisible) => {
        if (isVisible) {
            setVisibility(true);
        }
    }

    return (
        <div
            id={id}
            className={classNames(className, 'entry', {
                'timeline-item--no-children': children === '',
            })}
        >
            <VisibilitySensor
                {...visibilitySensorProps}
                onChange={onVisibilitySensorChange}
            >
                <Fragment>
                    <div className="title">
                        <div className={`${visible ? 'bounce-in' : 'is-hidden'}`}>
                            {/* {dateComponent !== null ? (
                                dateComponent
                            ) : (
                                <span className="timeline-item-date">
                                    <time
                                        className="timeline-item-dateinner"
                                        title={dateText}
                                    >
                                        {dateText}
                                    </time>
                                </span>
                            )} */}
                            <span className="timeline-item-date">
                                <time
                                    className="timeline-item-dateinner"
                                    title={dateText}
                                >
                                    {dateText}
                                </time>
                            </span>
                        </div>
                    </div>
                    <div className="body">
                        <div
                            className={`body-container ${visible ? 'bounce-in' : 'is-hidden'}`}
                        >
                            {children}
                        </div>
                    </div>
                </Fragment>
            </VisibilitySensor>
        </div>
    );
}

TimelineItem.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    className: PropTypes.string,
    dateText: PropTypes.string,
    // dateComponent: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.func,
    //     PropTypes.node,
    // ]),
    visibilitySensorProps: PropTypes.shape({}),
};

TimelineItem.defaultProps = {
    id: '',
    children: '',
    // dateComponent: null,
    className: '',
    dateText: '',
    visibilitySensorProps: { partialVisibility: true, offset: { bottom: 50 } },
};
