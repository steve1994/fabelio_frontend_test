import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {loadFurnitureList} from '../redux/action/furniture';
import FurnitureBar from '../component/furniture/FurnitureBar';
import {formatPriceNumber} from '../utils/helper';
import './css/index.css';

const Home = (props) => {

    useEffect(() => {
        props.loadFurnitureListAndType();
    }, [])

    return (
        <div>
            <FurnitureBar type={props.furnitureListType} />
            <div className="container mt-5">
                <div className="row">
                    {
                        props.furnitureList.map(item => (
                            <div className="col-6 mb-4">
                                <div className="col-md-12 furniture-card p-4">
                                    <div className="row h-100">
                                        <div className="col-12 mb-3">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    <h5>{item.name}</h5>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <div className="furniture-price">
                                                        {'IDR ' + formatPriceNumber(item.price) + ',00'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <p>{item.description.substring(0,114) + '...'}</p>
                                        </div>
                                        <div className="col-12 mb-2 text-left">
                                            <div className="furniture-style">
                                                {item.furniture_style.join(', ')}
                                            </div>
                                        </div>
                                        <div className="col-12 text-right">
                                            <div className="furniture-delivery">
                                                {item.delivery_time + ' Days'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    furnitureList : state.furniture,
    furnitureListType : state.furnitureType
})

const mapDispatchToProps = (dispatch) => ({
    loadFurnitureListAndType : () => (dispatch(loadFurnitureList()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Home);
