// get input values 

function getInputvalues(isIncrease, inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value = inputValue;
    if (isIncrease === true) {
        inputField.value = inputValue + 1;
    }
    else {
        inputField.value = inputValue - 1;
    }
    return inputField.value;

}

function getTotalPrice(inputValue, price) {
    const totalPrice = inputValue * price;
    return totalPrice;


}
function subTotal() {
    const phonePriceField = document.getElementById('phone-price');
    const phonePriceString = phonePriceField.innerText;
    const phonePrice = parseInt(phonePriceString);
    const casePriceField = document.getElementById('case-price');
    const casePriceString = casePriceField.innerText;
    const casePrice = parseInt(casePriceString);
    const subTotalField = document.getElementById('sub-total');
    const subTotal = phonePrice + casePrice;
    subTotalField.innerText = subTotal;
    return subTotal;
}
function taxAmount() {
    const subTotalField = document.getElementById('sub-total');
    const subTotalString = subTotalField.innerText;
    const subTotal = parseInt(subTotalString);
    const taxField = document.getElementById('tax');
    const tax = (subTotal * 5) / 100;
    taxField.innerText = tax;
    return tax;

}
function totalAmount() {
    const subTotalField = document.getElementById('sub-total');
    const subTotalString = subTotalField.innerText;
    const subTotal = parseInt(subTotalString);
    const taxField = document.getElementById('tax');
    const taxValueString = taxField.innerText;
    const taxValue = parseFloat(taxValueString);
    const totalField = document.getElementById('total-field');
    const totalVaule = subTotal + taxValue;
    totalField.innerText = totalVaule;
    return totalVaule;
}
function errorHandling(inputValue) {
    if (inputValue < 0) {
        alert('Cannot Make Negative Quantity');
    }
    return;
}

// phone plus button 
const phonePlusBtn = document.getElementById('phone-plus-btn');
phonePlusBtn.addEventListener('click', function () {
    const phoneInputValue = getInputvalues(true, 'phone-input-field');
    const totalPrice = getTotalPrice(phoneInputValue, '1219');
    const priceField = document.getElementById('phone-price');
    priceField.innerText = totalPrice;
    subTotal();
    taxAmount();
    totalAmount();

})
// phone minus button 
const phoneMinusBtn = document.getElementById('phone-minus-btn');
phoneMinusBtn.addEventListener('click', function () {
    const phoneInputValue = getInputvalues(false, 'phone-input-field');
    errorHandling();
    const totalPrice = getTotalPrice(phoneInputValue, '1219');
    const priceField = document.getElementById('phone-price');
    priceField.innerText = totalPrice;
    subTotal();
    taxAmount();
    totalAmount()
})

// case plus button 

const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click', function () {
    const caseInputValue = getInputvalues(true, 'case-input-field');
    const totalPrice = getTotalPrice(caseInputValue, '59');
    const priceField = document.getElementById('case-price');
    priceField.innerText = totalPrice;
    subTotal();
    taxAmount();
    totalAmount()
})
// case minus button 

const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click', function () {
    const caseInputValue = getInputvalues(false, 'case-input-field');
    errorHandling(caseInputValue);
    const totalPrice = getTotalPrice(caseInputValue, '59');
    const priceField = document.getElementById('case-price');
    priceField.innerText = totalPrice;
    subTotal();
    taxAmount();
    totalAmount()
})