import React from "react";
import PropTypes from 'prop-types';
const PrimeraApp = ( {saludo, subtitulo} ) => {

    // const saludo = {
    //     nombre: 'Martin',
    //     edad: 30
    // };

    // const saludo = 'Hola Mundo';
    // console.log( {props} );
    return(
        <>
            <h1> { saludo }</h1>
            {/* <pre> { JSON.stringify( saludo ) }</pre> */}
            <p> { subtitulo }</p>
            </>
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
    saludo: 'Soy un saludo'
}

export default PrimeraApp;