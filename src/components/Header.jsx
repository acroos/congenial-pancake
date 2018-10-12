import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">Home</a>
                </div>

            </nav>
        )
    }
}