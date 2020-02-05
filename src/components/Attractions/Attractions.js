import React, { useState } from 'react';

import {
    GET_ALL_ATTRACTIONS,
    GET_ATTRACTION,
    SAVE_ATTRACTION,
    UPDATED_ATTRACTION,
    DELETE_ATTRACTION
} from '../../services/attractions';
import FormAttraction from './FormAttractions';
import ListAttraction from './ListAttractions';

const attractionsExample = [
    {
        id: 0,
        name: 'Arrow',
        exhibition: '02/10/2020',
        type: 'Netflix'
    },
    {
        id: 1,
        name: 'Flash',
        exhibition: '04/20/2020',
        type: 'Netflix'
    },
    {
        id: 2,
        name: 'American Gods',
        exhibition: '08/05/2020',
        type: 'Amazon Video'
    },
    {
        id: 3,
        name: 'Game of Thrones',
        exhibition: '10/05/2020',
        type: 'HBO'
    }
];

function Attractions () {
    // const [attractions, setAttractions] = useState(attractionsExample);
    const [attractions, setAttractions] = useState([]);

    const handleSubmit = attraction => {
        console.log(attraction);
        setAttractions(attraction);
    };

    return (
        <main className="main container">
            <FormAttraction
                handleSubmit={ handleSubmit }
                handleUpdate=""
                update=""
                infoId=""
            />
            <ListAttraction
                attractions={ attractions }
                handleRemove=""
                handleGetItem=""
            />
        </main>
    );
}

export default Attractions;
