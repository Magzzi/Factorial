function factorial(n){
    if (n === 0 || n === 1) {
        return BigInt(1);
    }
    return BigInt(n) * factorial(n - 1);
}

function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const inputNumber = document.getElementById('myTextbox').value;
    const factorialResult = factorial(parseInt(inputNumber));

    // Display result
    document.getElementById('outputLabel').innerText = `${factorialResult}`;
}

function handleReset(event){
    event.preventDefault(); // Prevents the default form submission behavior

   
    document.getElementById('outputLabel').innerText = "";
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', handleSubmit);
document.getElementById('myForm').addEventListener('reset', handleReset);