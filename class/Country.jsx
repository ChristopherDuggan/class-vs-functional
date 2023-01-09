import React, { Component } from 'react';

class Country extends Component {
    constructor() {
        super()
        this.state = {
            capital: null
        }
    }

    nameGrabber(name) {
        if(this.state.capital === null) {
            
            fetch(`https://restcountries.com/v3.1/name/${name}`)
                .then(res => res.json())
                .then(data => this.setState({capital: data[0].capital}))

        } else {

            this.setState({capital: null})

        }
    }

    render() {
        return(
            <li 
                key={this.props.index}
                onClick={()=> this.nameGrabber(this.props.name)}
            >
                {this.props.name} - {this.state.capital}</li>
        )
    }
}

export default Country;
