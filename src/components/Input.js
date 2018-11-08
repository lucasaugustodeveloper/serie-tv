import React from 'react'

const Input = ({ type, placeholder, name, value, handleInputChange }) => (
    <input
        className="form-control"
        type={ type }
        placeholder={ placeholder }
        id={ name }
        name={ name }
        value={ value }
        onChange={ handleInputChange }
    />
)

export default Input