import React, { Component } from 'react';

import { GET_ATTRACTION } from '../../services/attractions';
import FormAttraction from './FormAttractions';

class UpdateAttraction extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            atracao: [],
            name: ''
        }

        this.getAttraction = this.getAttraction.bind(this);
        this.getAttraction();
    }

    componentDidMount() {
    }
    
    getAttraction() {
        const { params } = this.props.match;
    
        GET_ATTRACTION(parseInt(params.id))
            .then(res => this.setState({ atracao: res }));

        this.setState({ name: 'lucas' });

        console.log(this.state);
    }

    render() {
        return (
            <div>Update Attraction</div>
        )
    }
}

export default UpdateAttraction;
