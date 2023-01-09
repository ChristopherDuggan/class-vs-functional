import React, { Component } from 'react';
import Country from './Country';

class CountryList extends Component {
    render() {
        return(
            <ul>
                {this.props.data.map((country, index) => <Country 
                    name={country.name.common} 
                    key={index}
                />)}                   
            </ul>
                )
    }
}

export default CountryList;
