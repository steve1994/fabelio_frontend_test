import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import '../../pages/css/header.css';
import $ from 'jquery';
import {loadFurnitureListBasedOnType,
        loadFurnitureListBasedOnKeyword,
        loadFurnitureListBasedOnDeliver} from '../../redux/action/furniture';

const FurnitureBar = (props) => {

    const [searchFurnitureKeyword, setSearchFurnitureKeyword] = useState('');
    const [furnitureStyleSelected, setFurnitureStyleSelected] = useState([]);
    const [furnitureDeliverSelected, setFurnitureDeliverSelected] = useState([]);

    /*
        JQUERY FOR SHOWING DROPDOWN LIST
    */
    const clickDropdownFurnitureStyle = (event) => {
        let object = $(".furniture-style-dropdown .dropdown-menu");
        let displayCSS = object.css('display');
        if (displayCSS == 'none') {
            object.css('display','block');
        } else {
            object.css('display','none');
        }
    }

    const clickDropdownFurnitureDeliver = (event) => {
        let object = $(".furniture-deliver-dropdown .dropdown-menu");
        let displayCSS = object.css('display');
        if (displayCSS == 'none') {
            object.css('display','block');
        } else {
            object.css('display','none');
        }
    }

    /*
        EVENT HANDLER FOR INPUT IN THIS COMPONENT
    */
    const searchFurnitureBasedKeyword = (event) => {
        setFurnitureStyleSelected([]);
        setFurnitureDeliverSelected([]);
        setSearchFurnitureKeyword(event.target.value);
        props.loadFurnitureListBasedOnKeyword(event.target.value);
    }

    const checkFurnitureStyleOption = (event, item) => {
        setSearchFurnitureKeyword('');
        setFurnitureDeliverSelected([]);
        if (event.target.checked) {
            setFurnitureStyleSelected([...furnitureStyleSelected, item]);
            props.loadFurnitureListBasedOnType([...furnitureStyleSelected, item]);
        } else {
            setFurnitureStyleSelected(furnitureStyleSelected.filter(thisItem => thisItem != item));
            props.loadFurnitureListBasedOnType(furnitureStyleSelected.filter(thisItem => thisItem != item));
        }
    }

    const checkFurnitureDeliverOption = (event, deliverTime) => {
        setSearchFurnitureKeyword('');
        setFurnitureStyleSelected([]);
        if (event.target.checked) {
            setFurnitureDeliverSelected([...furnitureDeliverSelected, deliverTime]);
            props.loadFurnitureListBasedOnDeliver([...furnitureDeliverSelected, deliverTime]);
        } else {
            setFurnitureDeliverSelected(furnitureDeliverSelected.filter(thisItem => thisItem != deliverTime));
            props.loadFurnitureListBasedOnDeliver(furnitureDeliverSelected.filter(thisItem => thisItem != deliverTime));
        }
    }

    return (
        <div className="row" style={{backgroundColor:'blue',height:'150px'}}>
            <div className="container">
                <div className="row h-100 pt-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="search-bar">
                                    <input type='text' placeholder="Search Furniture" value={searchFurnitureKeyword} onChange={(e)=>searchFurnitureBasedKeyword(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="btn-group furniture-style-dropdown">
                                    <button className="dropdown-toggle" type="button" onClick={(e)=>clickDropdownFurnitureStyle(e)} id="dropdownFurnitureStyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Furniture Style
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownFurnitureStyle">
                                        {
                                            props.type.map(item => (
                                                <div className="dropdown-item">
                                                    <div className="row">
                                                        <div className="col-6 text-left">
                                                            {item}
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            <input type="checkbox" checked={furnitureStyleSelected.includes(item)} onChange={(e)=>checkFurnitureStyleOption(e,item)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="btn-group furniture-deliver-dropdown">
                                    <button className="dropdown-toggle" type="button" onClick={(e)=>clickDropdownFurnitureDeliver(e)} id="dropdownFurnitureDeliver" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Delivery Time
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownFurnitureDeliver">
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    1 week
                                                </div>
                                                <div className="col-6 text-right">
                                                    <input type="checkbox" checked={furnitureDeliverSelected.includes(7)} onChange={(e)=>checkFurnitureDeliverOption(e,7)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    2 weeks
                                                </div>
                                                <div className="col-6 text-right">
                                                    <input type="checkbox" checked={furnitureDeliverSelected.includes(14)} onChange={(e)=>checkFurnitureDeliverOption(e,14)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    1 month
                                                </div>
                                                <div className="col-6 text-right">
                                                    <input type="checkbox" checked={furnitureDeliverSelected.includes(28)} onChange={(e)=>checkFurnitureDeliverOption(e,28)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    More
                                                </div>
                                                <div className="col-6 text-right">
                                                    <input type="checkbox" checked={furnitureDeliverSelected.includes(56)} onChange={(e)=>checkFurnitureDeliverOption(e,56)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadFurnitureListBasedOnKeyword : (keyword) => (dispatch(loadFurnitureListBasedOnKeyword(keyword))),
    loadFurnitureListBasedOnType : (listOptions) => (dispatch(loadFurnitureListBasedOnType(listOptions))),
    loadFurnitureListBasedOnDeliver : (deliverOptions) => (dispatch(loadFurnitureListBasedOnDeliver(deliverOptions)))
})

export default connect(
    null,
    mapDispatchToProps
) (FurnitureBar);
