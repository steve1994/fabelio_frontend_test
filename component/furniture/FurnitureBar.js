import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import '../../pages/css/header.css';
import $ from 'jquery';
import {loadFurnitureListBasedAllFilter} from '../../redux/action/furniture';

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
        setSearchFurnitureKeyword(event.target.value);
        props.loadFurnitureListBasedAllFilter(event.target.value,furnitureStyleSelected,furnitureDeliverSelected);
    }

    const checkFurnitureStyleOption = (event, item) => {
        if (event.target.checked) {
            setFurnitureStyleSelected([...furnitureStyleSelected, item]);
            props.loadFurnitureListBasedAllFilter(searchFurnitureKeyword, [...furnitureStyleSelected, item], furnitureDeliverSelected);
        } else {
            setFurnitureStyleSelected(furnitureStyleSelected.filter(thisItem => thisItem != item));
            props.loadFurnitureListBasedAllFilter(searchFurnitureKeyword, furnitureStyleSelected.filter(thisItem => thisItem != item), furnitureDeliverSelected);
        }
    }

    const checkFurnitureDeliverOption = (event, deliverTime) => {
        if (event.target.checked) {
            setFurnitureDeliverSelected([...furnitureDeliverSelected, deliverTime]);
            props.loadFurnitureListBasedAllFilter(searchFurnitureKeyword, furnitureStyleSelected, [...furnitureDeliverSelected, deliverTime]);
        } else {
            setFurnitureDeliverSelected(furnitureDeliverSelected.filter(thisItem => thisItem != deliverTime));
            props.loadFurnitureListBasedAllFilter(searchFurnitureKeyword, furnitureStyleSelected, furnitureDeliverSelected.filter(thisItem => thisItem != deliverTime));
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
                                                            <div className="custom control custom-checkbox">
                                                                <input className="custom-control-input" type="checkbox" id={item} checked={furnitureStyleSelected.includes(item)} onChange={(e)=>checkFurnitureStyleOption(e,item)} />
                                                                <label className="custom-control-label" for={item}></label>
                                                            </div>
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
                                                    <div className="custom control custom-checkbox">
                                                        <input className="custom-control-input" id="delivery-7" type="checkbox" checked={furnitureDeliverSelected.includes(7)} onChange={(e)=>checkFurnitureDeliverOption(e,7)} />
                                                        <label className="custom-control-label" for="delivery-7"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    2 weeks
                                                </div>
                                                <div className="col-6 text-right">
                                                    <div className="custom control custom-checkbox">
                                                        <input className="custom-control-input" id="delivery-14" type="checkbox" checked={furnitureDeliverSelected.includes(14)} onChange={(e)=>checkFurnitureDeliverOption(e,14)} />
                                                        <label className="custom-control-label" for="delivery-14"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    1 month
                                                </div>
                                                <div className="col-6 text-right">
                                                    <div className="custom control custom-checkbox">
                                                        <input className="custom-control-input" id="delivery-28" type="checkbox" checked={furnitureDeliverSelected.includes(28)} onChange={(e)=>checkFurnitureDeliverOption(e,28)} />
                                                        <label className="custom-control-label" for="delivery-28"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="row">
                                                <div className="col-6 text-left">
                                                    More
                                                </div>
                                                <div className="col-6 text-right">
                                                    <div className="custom control custom-checkbox">
                                                        <input className="custom-control-input" id="delivery-56" type="checkbox" checked={furnitureDeliverSelected.includes(56)} onChange={(e)=>checkFurnitureDeliverOption(e,56)} />
                                                        <label className="custom-control-label" for="delivery-56"></label>
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
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadFurnitureListBasedAllFilter : (keyword,typeOptions,deliverOptions) => (dispatch(loadFurnitureListBasedAllFilter(keyword,typeOptions,deliverOptions)))
})

export default connect(
    null,
    mapDispatchToProps
) (FurnitureBar);
