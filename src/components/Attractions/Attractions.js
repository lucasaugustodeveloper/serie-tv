import React, { Component } from 'react';

import {
    GET_ALL_ATTRACTIONS,
    GET_ATTRACTION,
    SAVE_ATTRACTION,
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
            type: '',
            attraction: [],
            update: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdated = this.handleUpdated.bind(this);

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

    handleUpdated(id) {
        GET_ATTRACTION(id)
            .then(res => {
                const { id, name, type, exhibition } = res[0];
                this.setState({
                    id: id,
                    atracao: name,
                    type: type,
                    hour: exhibition,
                    update: true
                });
            });
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
        const { atracoes, id, atracao, hour, type, update } = this.state;

        return (
            <main className="main container">
                <FormAttraction
                    atracao={ atracao }
                    type={ type }
                    hour={ hour }
                    handleInputChange={ this.handleInputChange }
                    handleSubmit={ this.handleSubmit }
                    handleUpdate={ this.handleUpdated }
                    update={ update }
                    infoId={ id }
                />
                <ListAttraction
                    attractions={ atracoes }
                    handleRemove={ this.handleDelete }
                    handleUpdated={ this.handleUpdated }
                    handleUpdate={ this.handleUpdated }
                />
            </main>
        )
    }
}

export default Attractions;
