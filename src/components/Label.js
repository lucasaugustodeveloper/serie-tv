import React from 'react'

const Label = ({ name, displayName }) => (
    <label htmlFor={ name }>
        { displayName }
    </label>
)

export default Label
