let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
}

function luhnCheck(cardNumber) {
    var sum = 0;
    var numDigits = cardNumber.length;
    var parity = numDigits % 2;

    for (var i = 0; i < numDigits; i++) {
        var digit = parseInt(cardNumber.charAt(i));

        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

function validateForm() {
    var deliveryType = document.getElementById("deliveryType").value;
    var deliveryAddress = document.getElementById("deliveryAddress").value;
    var billingAddress = document.getElementById("billingAddress").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var paymentMethod = document.getElementById("paymentMethod").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cardExpiry = document.getElementById("cardExpiry").value;
    var cardType = document.querySelector('input[name="cardType"]:checked');

    if (
        deliveryType === "" ||
        billingAddress === "" ||
        contactNumber === "" ||
        email === "" ||
        paymentMethod === ""
    ) {
        alert("Please fill in all required fields.");
        return false;
    }

    if (deliveryType === "delivery" && deliveryAddress === "") {
        alert("Please provide the delivery address.");
        return false;
    }

    var sameAddressCheckbox = document.getElementById("sameAddressCheckbox");
    if (sameAddressCheckbox.checked && deliveryAddress === "") {
        alert("Please enter your delivery address first.");
        return false;
    }

    if (sameAddressCheckbox.checked) {
        document.getElementById("billingAddress").value = deliveryAddress;
    }

    if (paymentMethod === "online") {
        if (!cardType) {
            alert("Please select a card type.");
            return false;
        }

        if (cardNumber === "") {
            alert("Please provide a valid credit card number.");
            return false;
        }

        // Remove non-digit characters from the card number
        cardNumber = cardNumber.replace(/\D/g, '');

        if (cardType.value === "visa" && cardNumber.length !== 16) {
            alert("Please provide a valid Visa card number (16 digits).");
            return false;
        }
        if (cardType.value === "mastercard" && cardNumber.length !== 16) {
            alert("Please provide a valid MasterCard card number (16 digits).");
            return false;
        }
        if (cardType.value === "amex" && cardNumber.length !== 15) {
            alert("Please provide a valid American Express card number (15 digits).");
            return false;
        }

        if (!luhnCheck(cardNumber)) {
            alert("Please provide a valid credit card number.");
            return false;
        }
    }

    return true;
}

var paymentMethodSelect = document.getElementById("paymentMethod");
paymentMethodSelect.addEventListener("change", function() {
    var cardTypeRadios = document.querySelectorAll('input[name="cardType"]');
    var selectedCardType = document.querySelector('input[name="cardType"]:checked');

    if (paymentMethodSelect.value === "pickup") {
        cardTypeRadios.forEach(function(radio) {
            radio.disabled = true;
            if (radio.checked) {
                radio.checked = false;
            }
        });
    } else if (paymentMethodSelect.value === "online") {
        cardTypeRadios.forEach(function(radio) {
            radio.disabled = false;
        });

        if (selectedCardType) {
            var cardNumberInput = document.getElementById("cardNumber");

            if (selectedCardType.value === "visa" || selectedCardType.value === "mastercard") {
                cardNumberInput.maxLength = 16;
            } else if (selectedCardType.value === "amex") {
                cardNumberInput.maxLength = 15;
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var orderForm = document.getElementById("orderForm");
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            orderForm.submit();
        }
    });
});