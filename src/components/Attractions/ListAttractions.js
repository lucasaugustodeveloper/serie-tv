import React from 'react';
import { Link } from 'react-router-dom';

import './css/ListAttractions.css';

const ListAttraction = ({ attractions, handleRemove }) => (
    <div className="listAttractions row">
        { attractions.map(item => (
            <div className="col-xs-6 col-lg-3" key={item.id}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-9">{ item.name }</div>
                            <div className="col-sm-3">
                                <button className="btn btn-warning">
                                    <Link to={ `/dashboard/edit/${item.id}` }>
                                        <img
                                            src="https://cdn3.iconfinder.com/data/icons/cool-application-icons/512/pen-15-512.png"
                                            style={{ display: 'inline-block', width: '20px', height: '20px' }}
                                            alt={ item.name }
                                        />
                                    </Link>
                                </button>
                                <button className="btn btn-danger" onClick={ () => handleRemove(item.id) }>
                                    <img
                                        src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png"
                                        style={{ display: 'inline-block', width: '20px', height: '20px' }}
                                        alt={ item.name }
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <strong>Data de exibição:</strong> { item.exhibition }
                    </div>
                    <div className="panel-footer">
                        { item.type }
                    </div>
                </div>
            </div>
        )) }
    </div>
)

export default ListAttraction;
