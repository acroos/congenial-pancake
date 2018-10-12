import React from "react";
import Header from "./Header";
import Body from "./Body";

export default class HomePage extends React.Component {
    render() {
        return (
        <div className="container">
            <Header />
            <Body />
        </div>
        )
    }
}