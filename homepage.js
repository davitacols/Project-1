const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form.elements['username'].value;
  const password = form.elements['password'].value;
  if (username === 'admin' && password === 'password') {
    alert('You have successfully logged in.');
  } else {
    alert('Incorrect username or password.');
  }
});
