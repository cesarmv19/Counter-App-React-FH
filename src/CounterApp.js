import React, {useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

const [ counter, setCounter] = useState( value ); //El useState retorna un arreglo con una constante y una función
// console.log( nombre, setNombre)


    const handleAdd = () =>{
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 )
    }

    const handleReset = () =>{
        setCounter( value );
    }

    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    

    return(
        <>
            <h1>Counter App</h1>
            <h2> { counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset}>Reset</button>
            <button onClick={ handleSubtract}>-1</button>
            
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 123456
}

export default CounterApp;