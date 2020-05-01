import {fetchDataFurniture} from '../../service/api';
import * as type from '../constant/type';

export const setFurnitureListState = (furnitureList) => ({
    type : type.SET_LIST_FURNITURE,
    furnitureList
})

export const setFurnitureListTypeState = (furnitureListType) => ({
    type : type.SET_LIST_FURNITURE_STYLE,
    furnitureListType
})

export const setFurnitureListBasedOnAllFilter = (keyword,furnitureStyleOption,deliverTimeOption,furnitureList) => ({
    type : type.SET_LIST_FURNITURE_BASED_ALL_FILTER,
    keyword,
    furnitureStyleOption,
    deliverTimeOption,
    furnitureList
})

export const loadFurnitureList = () => {
    return dispatch => {
        return fetchDataFurniture()
        .then(response => {
            dispatch(setFurnitureListState(response.products));
            dispatch(setFurnitureListTypeState(response.furniture_styles));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const loadFurnitureListBasedAllFilter = (keyword, furnitureStyleOption, deliverTimeOption) => {
    return dispatch => {
        return fetchDataFurniture()
        .then(response => {
            dispatch(setFurnitureListBasedOnAllFilter(keyword, furnitureStyleOption, deliverTimeOption, response.products));
        })
        .catch(error => {
            console.log(error);
        })
    }
}
