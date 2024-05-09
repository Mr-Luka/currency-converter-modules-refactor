

const endpoint = `https://open.er-api.com/v6/latest`;
const ratesByBase = {};

export async function fetchRates(base= "USD"){
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;

}

export async function convert(amount, from, to) {
    // Frist check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no, we dont have ${from} to convert to ${to}. So lets go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // Store them for next time
        ratesByBase[from] = rates;
    }
    // convert that amount that they passed it
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}
