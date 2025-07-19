function PriceFormat({ price }) {
    return Intl.NumberFormat("en-IN", {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
    }).format(price / 1000)
}
export default PriceFormat;