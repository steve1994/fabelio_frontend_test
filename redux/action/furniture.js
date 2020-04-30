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

export const setFurnitureListBasedOnKeyword = (keyword, furnitureList) => ({
    type : type.SET_LIST_FURNITURE_BASED_KEYWORD,
    keyword,
    furnitureList
})

export const setFurnitureListBasedOnType = (furnitureStyleOption,furnitureList) => ({
    type : type.SET_LIST_FURNITURE_BASED_TYPE,
    furnitureStyleOption,
    furnitureList
})

export const setFurnitureListBasedOnDeliver = (deliverTimeOption,furnitureList) => ({
    type : type.SET_LIST_FURNITURE_BASED_DELIVER,
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

export const loadFurnitureListBasedOnKeyword = (keyword) => {
    return dispatch => {
        return fetchDataFurniture()
        .then(response => {
            dispatch(setFurnitureListBasedOnKeyword(keyword,response.products));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const loadFurnitureListBasedOnType = (furnitureStyleOption) => {
    return dispatch => {
        if (furnitureStyleOption.length == 0) {
            return dispatch(loadFurnitureList());
        } else {
            return fetchDataFurniture()
            .then(response => {
                dispatch(setFurnitureListBasedOnType(furnitureStyleOption,response.products));
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}

export const loadFurnitureListBasedOnDeliver = (deliverTimeOption) => {
    return dispatch => {
        if (deliverTimeOption.length == 0) {
            return dispatch(loadFurnitureList());
        } else {
            return fetchDataFurniture()
            .then(response => {
                dispatch(setFurnitureListBasedOnDeliver(deliverTimeOption,response.products));
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
