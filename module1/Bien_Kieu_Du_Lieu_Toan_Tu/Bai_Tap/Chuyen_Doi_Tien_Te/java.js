
function convertFunction() {
    const rate = 23000;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let amount = document.getElementById("amount").value;
    let result;

    if(from === to)
        result = amount;
    else if(from === "VND" && to === "USD")
        result = amount/rate;
    else
        result = amount*rate;

    result = result + " " + to;

    document.getElementById("result").innerHTML = result;
}
