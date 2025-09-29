document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) { alert('Please fill both fields'); return; }
    if (username === 'admin' && password === 'cafe123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'staffDashboard.html';
    } else {
        alert('Invalid credentials');
    }
});