import React, { useState } from 'react';

import './css/FormAttraction.css';
import Input from '../Input';
import Label from '../Label';

function FormAttraction ({
    handleSubmit,
    handleUpdate,
    update,
    infoId
}) {
    const [title, setTitle] = useState("");
    const [exhibition, setExhibition] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="row">
            <div className="col">
                <Label
                    name="atracao"
                    displayName="Nome da Atração"
                />
                <Input
                    type="text"
                    placeholder="Entre com o nome da atração"
                    name="attraction"
                    value={ title }
                    handleInputChange={ e => setTitle(e.target.value) }
                />
            </div>
            <div className="col">
                <Label
                    name="type"
                    displayName="Meio de Exibição"
                />
                <Input
                    type="text"
                    placeholder="informe aonde será exibido a atração"
                    name="attraction"
                    value={ exhibition }
                    handleInputChange={ e => setExhibition(e.target.value) }
                />
            </div>
            <div className="col">
                <Label
                    name="hour"
                    displayName="Data de Exibição"
                />
                <Input
                    type="date"
                    placeholder="Entra com o dia será exibido"
                    name="date"
                    value={ date }
                    handleInputChange={ e => setDate(e.target.value) }
                />
            </div>
            <div className='w-100' />
            <div className="col">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-3">
                        <button
                            type="button"
                            className={`btnSend btn ${!update ? 'btn-success' : 'btn-info'} btn-block btn-lg`}
                            onClick={
                                !update
                                    ? () => handleSubmit({
                                        id: Math.random().toString(),
                                        name: title,
                                        exhibition: date,
                                        type: exhibition
                                    })
                                    : () => handleUpdate(infoId)
                            }
                        >
                            { !update ? 'Salvar': 'Update' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAttraction
