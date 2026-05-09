import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar    from './components/Navbar/page';
import Footer    from './components/Footer/page';
import Pets      from './pages/Pets/page';
import About     from './pages/About/page';
import Contact   from './pages/Contact/page';
import Login     from './pages/Login/page';
import Signup    from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Adopt     from './pages/Adopt/page';

function Home() {
  return (
    <section className="page">
      <h1>Find Your New Best Friend</h1>
      <p>Give a loving pet a forever home. Browse our available animals and start your adoption journey today.</p>

      <div className="card-container">
        <div className="card">
          <img src="/images/pic 1.jpg" alt="Buddy the dog" />
          <h3>Buddy</h3>
          <p>Friendly and playful Labrador looking for an active family.</p>
          <Link to="/adopt">Adopt Buddy</Link>
        </div>
        <div className="card">
          <img src="/images/pic 2.jpg" alt="Luna the cat" />
          <h3>Luna</h3>
          <p>Calm and affectionate indoor cat, great with children.</p>
          <Link to="/adopt">Adopt Luna</Link>
        </div>
        <div className="card">
          <img src="/images/pic 3.png" alt="Max the dog" />
          <h3>Max</h3>
          <p>Energetic Border Collie who loves fetch and long walks.</p>
          <Link to="/adopt">Adopt Max</Link>
        </div>
      </div>

      <div>
        <h2>Why Adopt?</h2>
        <p>Every year thousands of animals wait for a loving family. Adoption saves lives, supports shelters, and brings joy into your home.</p>
        <Link to="/pets" className="link-button">Browse All Pets</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/pets"      element={<Pets />}      />
        <Route path="/about"     element={<About />}     />
        <Route path="/contact"   element={<Contact />}   />
        <Route path="/login"     element={<Login />}     />
        <Route path="/signup"    element={<Signup />}    />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adopt"     element={<Adopt />}     />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
