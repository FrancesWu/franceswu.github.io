import React from "react";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

export default function TimelineWrapper(props) {
    return (
        <div id="timeline" className='content-container'>
            <h3>My Career Timeline</h3>
            <Timeline className='timeline-wrapper'>
                <TimelineItem
                    key="1"
                    dateText="2014.08 ~ 2018.09"
                >
                    <h3>Bachelor of Art, Pomona College</h3>
                    <h4>Computer Science; Anthropology</h4>
                        <p>
                            I graduated from Pomona College, CA with BA in both Computer Science and Anthropology.
                            I also minored in Japanese, and passed N1 Japanese Language Proficiency Test in 2019.
                        </p>
                        <p>
                            Thanks to the policy at Claremont Colleges, it was relatively easy for me to explore different
                            areas of study as a freshwoman. I was very certain that I wanted to do something in Social Science,
                            but I took CS51 (Intro to Computer Science), just to fulfill our GE requirement. Within one semester I
                            just decided I would major in both and hence started my journey as a software developer.
                        </p>
                </TimelineItem>
                <TimelineItem
                    key="2"
                    dateText="2017.05 ~ 2017.08"
                >
                    <h3> Software Engineer Intern, Laserfiche </h3>
                    <h4> Long Beach, CA </h4>
                        <p>
                            This is my first paid internship! Before that I have worked in the college as TA and grader.
                            I also worked a summer in a startup to learn more about the software development cycles as an apprentice. However,
                            this is my first official internship in tech companies. There I mainly:
                        </p>
                        <ul>
                            <li>
                                Improved user experience for customer by designing and implementing Laserfiche Business Entity Designer,
                                a visualization tool for database, using AngularJS and D3.js
                            </li>
                            <li>
                                Increased loading speed of Laserfiche User Task Pane by refactoring the app using AngularJS
                            </li>
                        </ul>
                </TimelineItem>
                <TimelineItem
                    key="3"
                    dateText="2018.05 ~ 2018.08"
                >
                    <h3> Software Engineer Intern, NextRoll </h3>
                    <h4> San Francisco, CA </h4>
                    <p>
                        I did another internship in 2018. I really enjoy working at NextRoll so I went back for the fulltime
                        position later in 2018. I was also working on my thesis that summer. During this internship:
                    </p>
                    <ul>
                        <li>
                            Developed and maintained core components of AdRoll infrastructure including a frontend ReactJS component library and Ads Upload APIs
                        </li>
                        <li>
                            Worked with other engineers to develop new features including new Ad Create experience and support for video ads using Python and ReactJS Framework
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="4"
                    dateText="2018.11 ~ 2021.02"
                >
                    <h3> Software Engineer, NextRoll </h3>
                    <h4> San Francisco, CA </h4>
                    <p>
                        I went back to NextRoll after graduation, and officially started to work as a fullstack software developer. I have worked in two
                        teams and both were great. In AdRoll Ads Team, I was mostly doing frontend development, and after switching to Rollwork Reporting Team
                        (The B2B sector of the business), I was working on more complicated projects. Before getting promoted I mainly:
                    </p>
                    <ul>
                        <li>
                            Developed and maintained core components of AdRoll's frontend infrastructure including Ad Create Modal, Ad Upload Modal, Video Ad Integration using ReactJS for UIs, Python for APIs, and Postgres database
                        </li>
                        <li>
                            Monitored the health of APIs and performed hotfixes to ensure the functioning of AdRoll applications during on-calls
                        </li>
                        <li>
                            Collaborated closely with product managers and engineering leads across various teams to align on the requirements for Ad Library projects
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="5"
                    dateText="2021.02 ~ 2022.11"
                >
                    <h3> Senior Software Engineer, NextRoll </h3>
                    <h4> San Francisco, CA </h4>
                    <p>
                        With support from my manager, I was promoted and became a senior software engineer. Work is more challenging and I have
                        a lot to learn. Also I felt more comfortable with the techstack gradually. During my time as a senior software engineer, I:
                    </p>
                    <ul>
                        <li>
                            Drove new initiatives including Email Scheduled Reports, G2 and Bombora, Outreach Datasource Integrations,  Journey Stage Customization, defined priority and scopes, delegated tasks to the team and led daily standups and sprint plannings
                        </li>
                        <li>
                            Led development and maintenance for the core components of RollWorks infrastructure including Campaign Overview, Playbook, Account Journey Stages, Journey Stages Customization, using Python and Golang for APIs, Postgres and Clickhouse for databases, ReactJS for frontend components and UI in host apps
                        </li>
                        <li>
                            Mentored new team members and provided onboarding guidance
                        </li>
                        <li>
                            Monitored workflows using Apache Airflow and maintained AWS Batch jobs and EMR jobs during on-calls
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="6"
                    dateText="2022.11 ~ 2023.01"
                >
                    <h3> Senior Software Engineer, Google </h3>
                    <h4> Sunnyvale, CA </h4>
                    <p>
                        Though I really enjoyed my time at NextRoll, I decided to explore the opportunities to work and learn outside the company.
                        I received an offer from Google and started working as a backend engineer by the end of 2022. I was unfortunately impacted
                        by the wave of layoff in 2023, but I still got a chance to learn about and work on very cool projects that could potentially
                        benefit thousands of internal and external customers. During my time at Google, I:
                    </p>
                    <ul>
                        <li>
                            Worked on unifying egress and ingress rules for Virtual Private Cloud Service Control using Java and C++.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="7"
                    dateText="So What about ... Now?"
                >
                    <h3> ??? </h3>
                    <h4> ??? </h4>
                    <p>
                        I am not sure what is next for me, but I am ready to move to the next big thing in my career.
                    </p>
                </TimelineItem>
            </Timeline>
        </div>
    );
}