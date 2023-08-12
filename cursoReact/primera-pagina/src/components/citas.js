import {useEffect, useState} from 'react';

function Citas(){
    const [quote, setQuote] = useState('Hola soy una cita')
    useEffect(function(){

    },[])
    return(<div>{quote}</div>)
}

export default Citas