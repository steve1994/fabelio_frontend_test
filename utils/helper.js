export const formatPriceNumber = (input) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
