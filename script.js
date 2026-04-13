function cancelLast() {
    const resultField =
        document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}
function appendValue(value) {
    document.getElementById('result').value += value;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value);
        resultField.value = result || '0';
    }
    catch (error) {
        resultField.value = 'Error';
    }
}
function buttonGlow(button) {
    button.classList.add('glow');
    setTimeout(() => {
        button.classList.remove('glow');
    }, 600);
}  calculator