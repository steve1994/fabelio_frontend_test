import * as type from '../constant/type';

const furnitureType = (state = [], action) => {
    switch (action.type) {
        case type.SET_LIST_FURNITURE_STYLE:
            return action.furnitureListType;
        default:
            return state;
    }
}

export default furnitureType
