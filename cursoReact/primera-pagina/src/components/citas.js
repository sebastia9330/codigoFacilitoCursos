import {useEffect, useState} from 'react';

function Citas(){
    const [quote, setQuote] = useState(null)
    useEffect(function getQuotes(){
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())  // convertir a json
        .then(data => setQuote(data.data))
         //imprimir los datos en la consola
        
    },[])
    return(
        <div>
            <p>{quote?.name}</p>
        </div>
    )
}

export default Citas