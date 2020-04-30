import * as type from '../constant/type';

const furniture = (state = [], action) => {
    switch (action.type) {
        case type.SET_LIST_FURNITURE:
            return action.furnitureList;

        // case type.SET_LIST_FURNITURE_BASED_KEYWORD:
        //     return action.furnitureList.filter(item => item.name.toLowerCase().includes(action.keyword.toLowerCase()));
        // case type.SET_LIST_FURNITURE_BASED_TYPE:
        //     return action.furnitureList.filter(item => {
        //         let isFound = false;
        //         for (let i=0;i<item.furniture_style.length;i++) {
        //             if (action.furnitureStyleOption.includes(item.furniture_style[i])) {
        //                 isFound = true;
        //             }
        //         }
        //         return isFound;
        //     });
        // case type.SET_LIST_FURNITURE_BASED_DELIVER:
        //     let maximumDeliverOption = Math.max(...action.deliverTimeOption);
        //     let maximumDeliverOption2 = Math.max(...action.deliverTimeOption.filter(item => item != 56));
        //     return action.furnitureList.filter(item => {
        //         if (maximumDeliverOption == 56) {
        //             if (parseInt(item.delivery_time) > 28) {
        //                 return true;
        //             } else {
        //                 return parseInt(item.delivery_time) <= maximumDeliverOption2;
        //             }
        //         } else {
        //             return parseInt(item.delivery_time) <= maximumDeliverOption;
        //         }
        //     });
        
        case type.SET_LIST_FURNITURE_BASED_ALL_FILTER:
            let maximumDeliverOption = Math.max(...action.deliverTimeOption);
            let maximumDeliverOption2 = Math.max(...action.deliverTimeOption.filter(item => item != 56));
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
                        if (maximumDeliverOption == 56) {
                            if (parseInt(item.delivery_time) > 28) {
                                isDeliverMatch = true;
                            } else {
                                isDeliverMatch = parseInt(item.delivery_time) <= maximumDeliverOption2;
                            }
                        } else {
                            isDeliverMatch = parseInt(item.delivery_time) <= maximumDeliverOption;
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
