import Country from './Country';

function CountryList(props) {
    return(
        <ul>
            {props.data.map((country, index) => <Country 
                name={country.name.common} 
                key={index}
            />)}                   
        </ul>
    )
}

export default CountryList;

