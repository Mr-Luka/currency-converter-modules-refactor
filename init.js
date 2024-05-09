import {fromSelect, toSelect} from "./elements.js";
import { generateOptions } from "./utils.js";
import currencies from "./currencies.js"; // It does not need curly brackets because its export default
import {handleInput} from "./handlers.js";

export function init() {
    // When the page loads, this code runs!
const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
// Populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML= optionsHTML;

form.addEventListener("input", handleInput);
}