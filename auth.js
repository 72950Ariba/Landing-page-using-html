// Store user credentials in localStorage
function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if (username && password) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registration successful!');
  } else {
    alert('Please enter username and password.');
  }
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && username === storedUser.username && password === storedUser.password) {
    alert('Login successful!');
    showSecurePage();
  } else {
    alert('Invalid credentials!');
  }
}

function showSecurePage() {
  document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
  document.getElementById('securePage').classList.remove('hidden');
}

function logout() {
  alert('Logged out successfully.');
  location.reload();
}
