import './css/FormAttraction.css';

import React from 'react';
import { useFormik } from 'formik';


import Input from '../Input';
import Label from '../Label';
import Validation from './validation';

function FormAttraction ({
    onHandleSubmit,
    handleUpdate,
    update,
    infoId
}) {
    const { handleSubmit, handleChange, errors, values } = useFormik({
        initialValues: {
            name: '',
            attraction: '',
            date: '',
        },
        validationSchema: Validation,
        onSubmit(inputValues) {
            console.log(inputValues);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <Label
                        name="atracao"
                        displayName="Nome da Atração"
                    />
                    <Input
                        type="text"
                        placeholder="Entre com o nome da atração"
                        name="name"
                        value={ values.name }
                        handleInputChange={ handleChange }
                    />
                    {errors.name && <p className="errorMessage">{errors.name}</p>}
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
                        value={ values.attraction }
                        handleInputChange={ handleChange }
                    />
                    {errors.attraction && <p className="errorMessage">{errors.attraction}</p>}
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
                        value={ values.date }
                        handleInputChange={ handleChange }
                    />
                    {errors.date && <p className="errorMessage">{errors.date}</p>}
                </div>
                <div className='w-100' />
                <div className="col">
                    <div className="row justify-content-sm-center">
                        <div className="col-lg-3">
                            <button
                                type="submit"
                                className={`btnSend btn ${!update ? 'btn-success' : 'btn-info'} btn-block btn-lg`}
                            >
                                { !update ? 'Salvar': 'Update' }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormAttraction
