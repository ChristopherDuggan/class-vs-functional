import React, { Component } from "react";
import "./App.css";
import Country from './Country';
import CountryList from './CountryList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => this.setState({data: data}))
    }

    render() {
        return (
            <div className="App">
                <h1>Countries of the World</h1>
                <CountryList data={this.state.data} />
            </div>
        );
    }
}

export default App;
