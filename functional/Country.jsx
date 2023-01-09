import { useState } from 'react'

function Country(props) {

    const [ capital, setCapital ] = useState(null)

    const nameGrabber = name => {
        if(capital === null) {

            fetch(`https://restcountries.com/v3.1/name/${name}`)
                .then(res => res.json())
                .then(data => setCapital(data[0].capital))

        } else {
            setCapital(null)
        }
    }

    return(
        <li 
            key={props.index}
            onClick={()=> nameGrabber(props.name)}
        >
            {props.name} - {capital}</li>
    )
}

export default Country
