import Country from './Country';
import CountryList from './CountryList';
import { useState, useEffect } from 'react';

function App() {
    const [ data, setData ] = useState([])

    useEffect(
        () => {
            fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(data => setData(data))
        }, []
    )


    return(
        <div className="App">
            <h1>Countries of the World</h1>
            <CountryList data={data} />
        </div>
    )
}

export default App;

{/*
class App extends Component {

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
*/}
