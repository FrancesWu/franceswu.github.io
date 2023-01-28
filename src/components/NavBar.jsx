import React from 'react'
import "../styles/NavBar.scss";
import classNames from 'classnames';

export default function NavBar(props) {
    const [activeNav, setActiveNav] = React.useState("home");
    return (
        <div className='navbar-container'>
            <div className="navbar" role="navigation">
                <NavItem title={"Home"} navId={"home"} onClick={setActiveNav} activeNav={activeNav}/>
                <NavItem title={"About"} navId={"about"} onClick={setActiveNav} activeNav={activeNav}/>
                <NavItem title={"Timeline"} navId={"timeline"} onClick={setActiveNav} activeNav={activeNav}/>
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
        <a className={classnames} href={pathName} data-nav-section={props.navId} onClick={()=> props.onClick(props.navId)}>
            {props.title}
        </a>
    )
}
