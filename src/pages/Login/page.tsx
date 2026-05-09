import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill all login fields.');
      return;
    }
    alert('Login Successful!');
    navigate('/dashboard');
  }

  return (
    <section className="page">
      <div className="form-container">
        <h2>Welcome Back</h2>
        <p>Login to access your dashboard and adoption applications.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-email">Email Address</label>
            <input type="email" id="login-email" placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password"
              value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </section>
  );
}
