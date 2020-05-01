const API_URL_FURNITURE = 'https://www.mocky.io/v2/5c9105cb330000112b649af8';

export const fetchDataFurniture = async() => {
    let response = await fetch(API_URL_FURNITURE);
    let data = await response.json();
    return data;
}
