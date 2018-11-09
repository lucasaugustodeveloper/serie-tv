import React, { Component, Fragment } from 'react';

import {
    GET_ALL_ATTRACTIONS,
    SAVE_ATTRACTION,
    UPDATED_ATTRACTION,
    DELETE_ATTRACTION
} from '../../services/attractions';
import FormAttraction from './FormAttractions';
import ListAttraction from './ListAttractions';

class Attractions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            atracoes: [],
            id: 0,
            atracao: '',
            hour: '',
            type: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.refresh();
    }

    componentDidMount() {
        this.refresh();
    }

    handleInputChange({ target }) {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit() {
        const { atracao, hour, type } = this.state;

        if (
            atracao === '' ||
            hour === '' ||
            type === ''
        ) return;

        SAVE_ATTRACTION({
            name: atracao,
            exhibition: hour,
            type: type
        })
        this.refresh();
        this.clearForm();
    }

    handleDelete(id) {
        DELETE_ATTRACTION(id);
        this.refresh();
    }

    refresh() {
        GET_ALL_ATTRACTIONS()
            .then(res => this.setState({ atracoes: res }));
    }

    clearForm() {
        this.setState({
            type: '',
            atracao: '',
            hour: ''
        });
    }

    render() {
        const { atracoes, atracao, hour, type } = this.state;

        return (
            <Fragment>
                <FormAttraction
                    atracao={ atracao }
                    type={ type }
                    hour={ hour }
                    handleInputChange={ this.handleInputChange }
                    handleSubmit={ this.handleSubmit }
                />
                <ListAttraction
                    attractions={ atracoes }
                    handleRemove={ this.handleDelete }
                />
            </Fragment>
        )
    }
}

export default Attractions;
