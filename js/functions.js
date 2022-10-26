/* define your functions here */

console.log(cart);

function calculateTotal(q, p) {
    return q * p;
}

function outputCartRow(item, total) {
    const { product: {title, filename, price}, quantity } = item;
    console.log(title, filename, price, quantity);

    const row =`
                <tr>
                    <td><img src="images/${filename}"></td>
                    <td>${title}</td>
                    <td>${quantity}</td>
                    <td>$${price}</td>
                    <td>$${total.toFixed(2)}</td>
                </tr>`;
    document.write(row);

}

function outputTableBody() {
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
    }
}

function outputSubtotal() {
    const row = `
                <tr class="totals">
                    <td colspan="4">Subtotal</td>
                    <td>$${calculateSubtotal().toFixed(2)}</td>
                </tr>`;
    document.write(row);
}

function calculateSubtotal() {
    let subtotal = 0;
    for (let item of cart) {
        console.log(subtotal += calculateTotal(item.quantity, item.product.price));
    }
    return subtotal;
}

function outputTax() {
    const row = `
                <tr class="totals">
                    <td colspan="4">Tax</td>
                    <td>$${calculateTax().toFixed(2)}</td>
                </tr>`;
    document.write(row);
}

function calculateTax() {
    return calculateSubtotal() * tax_rate;
}

function outputShipping() {
    const row = `
                <tr class="totals">
                    <td colspan="4">Shipping</td>
                    <td>$${calculateShipping().toFixed(2)}</td>
                </tr>`;
    document.write(row);
}

function calculateShipping() {
    if (calculateSubtotal() > shipping_threshold) {
        return 0;
    } else {
        return 40;
    }
}

function outputGrandTotal() {
    const row = `
                <tr class="totals">
                    <td colspan="4" class="focus">Grand Total</td>
                    <td class="focus">$${calculateGrand().toFixed(2)}</td>
                </tr>`;
    document.write(row);
}

function calculateGrand() {
    return calculateSubtotal() + calculateTax() + calculateShipping();
}