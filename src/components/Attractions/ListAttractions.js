import React from 'react';

import './css/ListAttractions.css';

const ListAttraction = ({
    attractions,
    handleRemove,
    handleGetItem
}) => (
    <div className="listAttractions row">
        { attractions.map(item => (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4" key={item.id}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-12 col-sm-7 col-lg-7">{ item.name }</div>
                            <div className="col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-0 col-lg-5">
                                <div className="btn-group">
                                    <button className="btn btn-warning" onClick={ () => handleGetItem(item.id) }>
                                        <img
                                            src="https://cdn3.iconfinder.com/data/icons/cool-application-icons/512/pen-15-512.png"
                                            style={{ width: '20px', height: '20px' }}
                                            alt={ item.name }
                                        />
                                    </button>
                                    <button className="btn btn-danger" onClick={ () => handleRemove(item.id) }>
                                        <img
                                            src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png"
                                            style={{ width: '20px', height: '20px' }}
                                            alt={ item.name }
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <strong>Data de exibição:</strong> { item.exhibition }
                        <div className="row">

                        </div>
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
