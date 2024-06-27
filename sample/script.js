document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('number')) {
                appendToDisplay(button.textContent);
            } else if (button.classList.contains('operator')) {
                appendToDisplay(` ${button.textContent} `);
            } else if (button.classList.contains('decimal')) {
                appendToDisplay(button.textContent);
            } else if (button.classList.contains('equals')) {
                calculateResult();
            }
        });
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        try {
            let result = eval(display.value.replace('÷', '/'));
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }
});
