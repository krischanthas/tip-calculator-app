const billInput = document.getElementById("bill-total");
const partySizeInput = document.getElementById("party-size");
const tipOptions = document.getElementsByClassName("tip");
const customOption = document.getElementsByClassName("custom")[0];
const customInput = document.getElementById('customTip');
const tipAmountPerPerson = document.getElementById("tip-amt");
const totalAmountPerPerson = document.getElementById("total-amt");
const tipOption = document.getElementById("tip-options");
const reset = document.getElementById("reset");

let billTotal = 0;
let partySize = 1;
let selectedTip = 0;
let customTip = null;

// function performs calculations and displays dollar amounts
const updateTotals = (billTotal, selectedTip, customTip, partySize) => {
  if (customTip === null) {
    tipAmountPerPerson.innerHTML =
      "$" + ((billTotal * selectedTip) / partySize).toFixed(2);
    totalAmountPerPerson.innerHTML =
      "$" + ((billTotal * (1 + selectedTip)) / partySize).toFixed(2);
  } else {
    tipAmountPerPerson.innerHTML = "$" + (customTip / partySize).toFixed(2);
    totalAmountPerPerson.innerHTML =
      "$" + ((billTotal + customTip) / partySize).toFixed(2);
  }
};

// function for toggling selected tip option
const toggleTip = (event) => {
  var tipNode = document.getElementsByClassName("active")[0];
  if (tipNode !== undefined) {
    tipNode.classList.remove("active");
    customInput.value = null;
    customInput.placeholder = 'Custom';
    }
  event.target.classList.add("active");
};

// function to reset values
const resetValues = () => {
  billTotal = 0;
  partySize = 1;
  selectedTip = 0;
  customTip = null;
  billInput.value = null;
  updateTotals(billTotal, selectedTip, customTip, partySize);
};

// event listener for user inputs
billInput.addEventListener("change", (event) => {
  billTotal = parseInt(event.target.value);
  updateTotals(billTotal, selectedTip, customTip, partySize);
});

partySizeInput.addEventListener("change", (event) => {
  partySize = parseInt(event.target.value);
  updateTotals(billTotal, selectedTip, customTip, partySize);
});

customOption.addEventListener("change", (event) => {
  customTip = parseInt(event.target.value);
  updateTotals(billTotal, selectedTip, customTip, partySize);
});

customOption.addEventListener("click", (event) => {
  customOption.style.backgroundColor = "hsl(172, 67%, 45%)";
  toggleTip(event);
});

Array.from(tipOptions).forEach((tipOption) => {
  tipOption.addEventListener("click", (event) => {
    selectedTip = parseFloat(event.target.getAttribute("data-tip"));
    customTip = null;
    updateTotals(billTotal, selectedTip, customTip, partySize);
    toggleTip(event);
  });
});

reset.addEventListener("click", (event) => {
  toggleTip(event);
  resetValues();
});
