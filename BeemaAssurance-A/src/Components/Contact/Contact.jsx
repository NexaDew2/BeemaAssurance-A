
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('https://formsubmit.co/ajax/beemaassurance@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-md lg:max-w-xl w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-left">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 lg:p-10"
        >
          <input
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={formData.name}
            className="w-full max-w-full lg:max-w-lg border border-gray-400 rounded px-3 py-2 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full max-w-full lg:max-w-lg border border-gray-400 rounded px-3 py-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={handleChange}
            value={formData.message}
            className="w-full max-w-full lg:max-w-lg border border-gray-400 rounded px-3 py-2 h-28 resize-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[rgb(45,125,245)] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
          <p
            className={`text-sm ${
              status.includes('successfully') ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;


