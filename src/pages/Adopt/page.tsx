import { useState, FormEvent } from 'react';

export default function Adopt() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '',
    pet: '', housing: '', experience: '', reason: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { name, email, phone, address, pet, housing, experience, reason } = form;
    if (!name || !email || !phone || !address || !pet || !housing || !experience || !reason) {
      alert('Please fill all fields in the adoption form.');
      return;
    }
    alert('Adoption Application Submitted! We will contact you soon.');
    setForm({ name: '', email: '', phone: '', address: '', pet: '', housing: '', experience: '', reason: '' });
  }

  return (
    <section className="page">
      <h1>Adoption Application</h1>
      <p>Please fill out the form below carefully. Our team will review your application and contact you within 2–3 business days.</p>

      <div className="form-container">
        <h2>Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="adopt-name">Full Name</label>
            <input type="text" id="adopt-name" placeholder="Your full legal name"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="adopt-email">Email Address</label>
            <input type="email" id="adopt-email" placeholder="you@example.com"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="adopt-phone">Phone Number</label>
            <input type="tel" id="adopt-phone" placeholder="+1 234 567 8900"
              value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <label htmlFor="adopt-address">Home Address</label>
            <input type="text" id="adopt-address" placeholder="Street, City, State, ZIP"
              value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
          </div>

          <div>
            <label htmlFor="adopt-pet">Which Pet Would You Like to Adopt?</label>
            <div className="select-container">
              <select id="adopt-pet" value={form.pet} onChange={e => setForm({ ...form, pet: e.target.value })}>
                <option value="">-- Select a pet --</option>
                <option value="buddy">Buddy (Labrador)</option>
                <option value="luna">Luna (Domestic Shorthair Cat)</option>
                <option value="max">Max (Border Collie)</option>
                <option value="bella">Bella (Persian Cat)</option>
                <option value="cleo">Cleo (Holland Lop Rabbit)</option>
                <option value="rocky">Rocky (German Shepherd)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="adopt-housing">Type of Housing</label>
            <div className="select-container">
              <select id="adopt-housing" value={form.housing} onChange={e => setForm({ ...form, housing: e.target.value })}>
                <option value="">-- Select housing type --</option>
                <option value="house">House with Garden</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condominium</option>
                <option value="farm">Farm / Rural</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="adopt-experience">Previous Pet Experience</label>
            <div className="select-container">
              <select id="adopt-experience" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}>
                <option value="">-- Select experience level --</option>
                <option value="first">First-time owner</option>
                <option value="some">Some experience</option>
                <option value="experienced">Experienced owner</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="adopt-reason">Why Do You Want to Adopt?</label>
            <textarea id="adopt-reason" rows={4}
              placeholder="Tell us a little about your lifestyle and why you'd like to adopt this pet..."
              value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} />
          </div>

          <button type="submit" className="lg-button">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
