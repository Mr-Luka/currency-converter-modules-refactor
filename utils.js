export function generateOptions(options) {
// using Object.entries we will turn this object of currencies into an array
// using .map() we are going to get a subArray 
    return Object.entries(options).map(([currencyCode, currencyName])=>{
       return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
    }).join("")
}


export // function formating the currency when converted
function formatCurrency (amount, currency) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}