import React, { Fragment } from 'react';

import { GET_ATTRACTION } from '../../services/attractions';
import FormAttraction from './FormAttractions';

const info = id => {
    return GET_ATTRACTION(parseInt(id));
};

const handleInputChange = () => {
    console.log('handleChange');
}
const handleSubmit = () => {
    console.log('handleSubmit');
}

const UpdateAttraction = props => {
    const { pathname } = window.location;
    const _id = pathname.split('/')[3];
    info(_id).then(res => console.log(res));

    const atracao = '';
    const type = '';
    const hour = '';

    return (
        <Fragment>
            <FormAttraction
                atracao={ atracao }
                type={ type }
                hour={ hour }
                handleInputChange={ handleInputChange }
                handleSubmit={ handleSubmit }
            />
        </Fragment>
    )
}

export default UpdateAttraction;
