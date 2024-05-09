import {generateOptions} from "./utils.js";
import currencies from "./currencies.js";   // It does not need curly brackets because its export default
import {handleInput} from "./handlers.js";
import {fromSelect, toSelect} from "./elements.js";



const form = document.querySelector('.app form');
const endpoint = `https://open.er-api.com/v6/latest`;
const ratesByBase = {};


const optionsHTML = generateOptions(currencies);
// Populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML= optionsHTML;

form.addEventListener("input", handleInput);