import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

import { GET_ATTRACTION, SAVE_ATTRACTION, DELETE_ATTRACTION } from '../services/attractions';

import React, { Component } from 'react';

import Menu from '../Menu/Menu';
import Input from '../components/Input';
import Label from '../components/Label';
import ListAttraction from '../Attractions/GetAttractions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      atracoes: [],
      id: 0,
      atracao: '',
      hour: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.refresh();
  }

  componentDidMount() {
    GET_ATTRACTION()
      .then(res => this.setState({ atracoes: res }))
  }

  handleInputChange({ target }) {
    this.setState({ [ target.name ]: target.value });
  }

  handleSubmit() {
    const { atracao, hour } = this.state;

    if (atracao === '' || hour === '') return;

    const dadosAtracao = {
      name: atracao,
      exhibition: hour
    };

    SAVE_ATTRACTION(dadosAtracao);
    this.refresh();
    this.setState({ atracao: '', hour: '' })
  }

  handleDelete(id) {
    DELETE_ATTRACTION(id);
    this.refresh();
  }

  refresh() {
    GET_ATTRACTION()
      .then(res => this.setState({ atracoes: res }));
  }

  render() {
    return (
     <div className="container-fluid">
        <header className="row">
          <Menu />
        </header>
        
        <main className="container">
            <div className="col-md-6">              
              <div className="form-group">
                <Label
                  name='atracao'
                  displayName='Nome da Atração'
                />
                <Input
                  type='text'
                  placeholder='nome da atração'
                  name='atracao'
                  value={ this.state.atracao }
                  handleInputChange={ this.handleInputChange }
                />
              </div>

              <div className="form-group">
                <Label
                  name="hour"
                  displayName='Data de exibição'
                />
                <Input
                  type='text'
                  placeholder='data de exibição'
                  name='hour'
                  value={ this.state.hour }
                  handleInputChange={ this.handleInputChange }
                />
              </div>

              <div className="row">
                <div className="col-md-3">
                  <button className="btn btn-default" type="submit" onClick={ this.handleSubmit }>Enviar Atração</button>
                </div>
              </div>

            </div>

            <div className="App col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <ListAttraction attractions={ this.state.atracoes } handleRemove={ this.handleDelete } />
                  </div>
                </div>
              </div>
            </div>
        </main>
     </div>
    );
  }
}

export default App;
