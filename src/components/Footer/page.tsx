import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>🐾 Pet Adoption</h1>
          <p>Connecting loving families with pets in need since 2020.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <Link to="/pets">Browse Pets</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/adopt">Apply to Adopt</Link>
        </div>
        <div>
          <h2>Account</h2>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <p>&#169; 2026 Pet Adoption Website. All rights reserved.</p>
    </footer>
  );
}
