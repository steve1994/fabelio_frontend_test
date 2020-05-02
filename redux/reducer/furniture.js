import * as type from '../constant/type';

const furniture = (state = [], action) => {
    switch (action.type) {
        case type.SET_LIST_FURNITURE:
            return action.furnitureList;
        case type.SET_LIST_FURNITURE_BASED_ALL_FILTER:
            return action.furnitureList.filter(item => {
                let booleanKeyword = item.name.toLowerCase().includes(action.keyword.toLowerCase());
                if (booleanKeyword) {
                    let isStyleMatch = false;
                    for (let i=0;i<item.furniture_style.length;i++) {
                        if (action.furnitureStyleOption.includes(item.furniture_style[i])) {
                            isStyleMatch = true;
                        }
                    }
                    if (action.furnitureStyleOption.length == 0) {
                        isStyleMatch = true;
                    }
                    if (isStyleMatch) {
                        let isDeliverMatch = false;
                        for (let i=0;i<action.deliverTimeOption.length;i++) {
                            switch (action.deliverTimeOption[i]) {
                                case 7:
                                    if (parseInt(item.delivery_time) <= 7) {
                                        isDeliverMatch = true;
                                    }
                                    break;
                                case 14:
                                    if (parseInt(item.delivery_time) > 7 && parseInt(item.delivery_time) <= 14) {
                                        isDeliverMatch = true;
                                    }
                                    break;
                                case 28:
                                    if (parseInt(item.delivery_time) > 15 && parseInt(item.delivery_time) <= 28) {
                                        isDeliverMatch = true;
                                    }
                                    break;
                                default:
                                    if (parseInt(item.delivery_time) > 28) {
                                        isDeliverMatch = true;
                                    }
                                    break;
                            }
                        }
                        if (action.deliverTimeOption.length == 0) {
                            isDeliverMatch = true;
                        }
                        return isDeliverMatch;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            });
        default:
            return state;
    }
}

export default furniture
