import { useState, FormEvent } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please complete the contact form.');
      return;
    }
    alert('Message Sent Successfully!');
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <section className="page">
      <h1>Contact Us</h1>
      <p>Have a question? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.</p>

      <div className="form-container">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name">Full Name</label>
            <input type="text" id="contact-name" placeholder="Your full name"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="contact-email">Email Address</label>
            <input type="email" id="contact-email" placeholder="you@example.com"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="contact-subject">Subject</label>
            <input type="text" id="contact-subject" placeholder="What is this about?"
              value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows={5} placeholder="Write your message here..."
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
