import React from 'react';

import './css/ListAttractions.css';

const ListAttraction = ({
    attractions,
    handleRemove,
    handleGetItem
}) => (
    <div className="listAttractions row">
        { attractions.map(item => (
            <div className="col" key={item.id}>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <div className="card-title">
                            <div className="row">
                                <div className="col">{ item.name }</div>
                            </div>
                        </div>
                        <strong>Data de exibição:</strong> { item.exhibition }
                        <p>{item.type}</p>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group">
                            <button className="btn btn-warning" onClick={() => handleGetItem(item.id)}>
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/cool-application-icons/512/pen-15-512.png"
                                    style={{ width: '20px', height: '20px' }}
                                    alt={item.name}
                                />
                            </button>
                            <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png"
                                    style={{ width: '20px', height: '20px' }}
                                    alt={item.name}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )) }
    </div>
)

export default ListAttraction;
