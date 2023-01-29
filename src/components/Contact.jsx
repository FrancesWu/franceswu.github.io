import React from "react";
import "../styles/Contact.scss";

export default function Contact() {
    return (
        <div id="contact" className="content-container">
            <div className="contact-container">
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
                    <ContactIcon
                        url={"mailto:franceswuxinyu@gmail.com"}
                        iconClass={"fa-regular fa-envelope fa-2xl"}
                    />
                    <ContactIcon
                        url={"https://www.facebook.com/francesxinyu.wu/"}
                        iconClass={"fa-brands fa-square-facebook fa-2xl"}
                    />
                    <ContactIcon
                        url={"https://space.bilibili.com/8301288"}
                        iconClass={"fa-brands fa-bilibili fa-2xl"}
                    />
                    <ContactIcon
                        url={"https://www.youtube.com/channel/UCwV7HZf3ADBMwBT66e1qVPQ"}
                        iconClass={"fa-brands fa-youtube fa-2xl"}
                    />
            </div>
        </div>
    )
}

function ContactIcon(props) {
    return (
        <span className="contact-icon-container">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <i className={props.iconClass} />
            </a>
        </span>
    )
}