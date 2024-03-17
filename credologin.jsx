import React, { useState } from 'react';
import './LoginPage.css'; 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h1 className="welcome-message">Welcome to CREDO SYSTEMZ!!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2 className="text-center">Login</h2>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
          <button className="login-button" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;