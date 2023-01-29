import React from 'react'
import "../styles/NavBar.scss";
import classNames from 'classnames';

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar(props) {
    const [activeNav, setActiveNav] = React.useState("about");
    return (
        <div className='navbar-container'>
            <div className="navbar" role="navigation">
                <NavItem title={"About"} navId={"about"} onClick={setActiveNav} activeNav={activeNav}/>
                <NavItem title={"Timeline"} navId={"timeline"} onClick={setActiveNav} activeNav={activeNav}/>
                <NavItem title={"Beyond Work"} navId={"beyondwork"} onClick={setActiveNav} activeNav={activeNav}/>
                <NavItem title={"Contact"} navId={"contact"} onClick={setActiveNav} activeNav={activeNav}/>
            </div>
        </div>
    )
}

function NavItem(props) {
    const pathName = ["#", props.navId].join('');
    const classnames = classNames({
        'navbar-item': true,
        'navbar-item-active': props.activeNav == props.navId,
    });
    return (
        <span onClick={()=> props.onClick(props.navId)}>
            <AnchorLink href={pathName} className={classnames}>{props.title}</AnchorLink>
        </span>

    )
}
