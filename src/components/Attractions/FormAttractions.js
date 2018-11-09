import React from 'react';

import './css/FormAttraction.css';
import Input from '../Input';
import Label from '../Label';

const FormAttraction = ({ atracao, type, hour, handleInputChange, handleSubmit }) => (
    <div className="row">
        <div className="col-xs-6">
            <Label
                name="atracao"
                displayName="Nome da Atração"
            />
            <Input
                type="text"
                placeholder="Entre com o nome da atração"
                name="atracao"
                value={ atracao }
                handleInputChange={ handleInputChange }
            />
        </div>
        <div className="col-xs-6">
            <Label
                name="type"
                displayName="Meio de Exibição"
            />
            <Input
                type="text"
                placeholder="informe aonde será exibido a atração"
                name="type"
                value={ type }
                handleInputChange={ handleInputChange }
            />
        </div>
        <div className="col-xs-6">
            <Label
                name="hour"
                displayName="Data de Exibição"
            />
            <Input
                type="text"
                placeholder="Entra com o dia será exibido"
                name="hour"
                value={ hour }
                handleInputChange={ handleInputChange }
            />
        </div>
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-3">
                    <button
                        type="button"
                        className="btnSend btn btn-default btn-block btn-lg"
                        onClick={ handleSubmit }
                    >Enviar</button>
                </div>
            </div>
        </div>
    </div>    
)

export default FormAttraction