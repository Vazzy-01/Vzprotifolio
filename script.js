const button = document.querySelector('.login-button');
const form = document.querySelector('.hidden-login-form');
const closeButton = document.querySelector('.close-button');
button.addEventListener('click', () => {
  form.style.display = 'flex';
  button.style.display = 'none';
});
closeButton.addEventListener('click', () => {
    form.style.display = 'none';
    button.style.display = 'inline-block';
});
// Toggle form visibility on button click
// Hide button when form is displayed
// Show button when form is hidden
// Ensure form is hidden by default
