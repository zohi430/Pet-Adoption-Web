import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.password || !form.confirm) {
      alert('Please fill all signup fields.');
      return;
    }
    alert('Signup Successful!');
    navigate('/login');
  }

  return (
    <section className="page">
      <div className="form-container">
        <h2>Create Account</h2>
        <p>Join our community and give a pet a loving home.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" placeholder="John Smith"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="signup-email">Email Address</label>
            <input type="email" id="signup-email" placeholder="you@example.com"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="signup-phone">Phone Number</label>
            <input type="tel" id="signup-phone" placeholder="+1 234 567 8900"
              value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Create a strong password"
              value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          </div>
          <div>
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input type="password" id="signup-confirm" placeholder="Repeat your password"
              value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
          </div>
          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </section>
  );
}
