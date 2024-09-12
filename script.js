function calculatePrice() {
    const price = parseFloat(document.getElementById('price').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    if (isNaN(price) || isNaN(exchangeRate)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const priceInQuetzales = price * exchangeRate;

    // Sumar Q10 de gastos fijos
    const finalPrice = priceInQuetzales + 10;

    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
}
