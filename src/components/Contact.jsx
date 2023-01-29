import React from "react";
import "../styles/Contact.scss";

export default function Contact() {
    return (
        <div id="contact" className="content-container">
            <div className="">
                <ul>
                    <ContactIcon
                        url={"https://github.com/FrancesWu"}
                        iconClass={"fa-brands fa-github-square fa-2xl"}
                    />
                    <ContactIcon
                        url={"https://www.linkedin.com/in/franceswuxinyu0120/"}
                        iconClass={"fa-brands fa-linkedin-in fa-2xl"}
                    />
                    <ContactIcon
                        url={"https://www.instagram.com/franceswuxinyu/"}
                        iconClass={"fa-brands fa-instagram fa-2xl"}
                    />
                </ul>
            </div>
        </div>
    )
}

function ContactIcon(props) {
    return (
        <li className="contact-icon-container">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <i className={props.iconClass} />
            </a>
        </li>
    )
}