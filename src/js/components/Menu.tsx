import * as React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component<any, any> {
    public render() {
        return (
            <nav className="nav">
                 <ul className="nav__list">
                    <li><Link  className="nav__item" to='/page-1'>Page One</Link></li>
                    <li><Link  className="nav__item" to='/page-2'>Page Two</Link></li>
                    <li><Link  className="nav__item" to='/tests'>Tests</Link></li>
                </ul>
            </nav>    
        )
    }
}