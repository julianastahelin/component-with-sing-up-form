const freeTrialForm = document.querySelector('.free-trial-form');
let input = document.querySelectorAll('.client-info');
let errorMessage = document.querySelectorAll('.empty-input-error');
let errorIcon = document.querySelectorAll('.icon-error');

freeTrialForm.addEventListener('submit', (event) => {
    console.log(input[0].value);
    input.forEach((input, index) => {
        if (input.value === '') {
            input.classList.add('input-error');
            errorMessage[index].classList.add('show');
            errorIcon[index].classList.add('show');
            event.preventDefault();
        } else {
            input.classList.remove('input-error');
            errorMessage[index].classList.remove('show');
            errorIcon[index].classList.remove('show');
        }
    })
    if (input[2].value === '') {
        input[2].placeholder = 'email@example.com';
        input[2].classList.add('placeholder-error');
    } 
});

input.forEach((input, index) => {
    input.addEventListener('change', () => {
        if (input.value === '') {
            input.classList.add('input-error');
            errorMessage[index].classList.add('show');
            errorIcon[index].classList.add('show');
        } else {
            input.classList.remove('input-error');
            errorMessage[index].classList.remove('show');
            errorIcon[index].classList.remove('show');
        }
    })
});