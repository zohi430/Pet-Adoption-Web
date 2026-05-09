import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="page">
      <h1>About Us</h1>
      <p>We are a passionate team of animal lovers dedicated to connecting homeless pets with caring families. Since 2020, we have helped over 3,000 animals find their forever homes.</p>

      <h2>Our Mission</h2>
      <p>To eliminate animal homelessness by building a trusted, transparent, and compassionate adoption platform that empowers both adopters and shelters.</p>

      <h2>Our Values</h2>
      <div className="card-container">
        <div className="card">
          <h3>❤️ Compassion</h3>
          <p>Every animal deserves love and safety. We treat every pet with dignity and care throughout the adoption process.</p>
        </div>
        <div className="card">
          <h3>🔍 Transparency</h3>
          <p>We provide honest, complete information about each pet so families can make well-informed decisions.</p>
        </div>
        <div className="card">
          <h3>🤝 Community</h3>
          <p>We partner with local shelters, vets, and volunteers to build a strong support network for adopters.</p>
        </div>
      </div>

      <h2>Meet the Team</h2>
      <div className="card-container">
        <div className="card">
          <h3>Sarah Mitchell</h3>
          <h4>Founder &amp; CEO</h4>
          <p>Veterinarian with 15 years of experience and a lifelong love for animals.</p>
        </div>
        <div className="card">
          <h3>James Okafor</h3>
          <h4>Head of Adoptions</h4>
          <p>Coordinates pet placements and ensures every match is a perfect fit.</p>
        </div>
        <div className="card">
          <h3>Priya Sharma</h3>
          <h4>Veterinary Partner</h4>
          <p>Oversees all health screenings and provides follow-up care guidance.</p>
        </div>
        <div className="card">
          <h3>Tom Rivera</h3>
          <h4>Community Manager</h4>
          <p>Manages foster networks and volunteer programs across partner shelters.</p>
        </div>
      </div>

      <h2>Our Impact</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Pets Adopted</th>
              <th>Partner Shelters</th>
              <th>Volunteers</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2020</td><td>312</td><td>8</td><td>45</td></tr>
            <tr><td>2021</td><td>587</td><td>14</td><td>92</td></tr>
            <tr><td>2022</td><td>814</td><td>21</td><td>150</td></tr>
            <tr><td>2023</td><td>964</td><td>28</td><td>210</td></tr>
            <tr><td>2024</td><td>1,102</td><td>35</td><td>290</td></tr>
            <tr><td>2025</td><td>1,340</td><td>42</td><td>380</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
