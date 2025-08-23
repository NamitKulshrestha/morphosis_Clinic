import React, { useState } from 'react';
import "../css/Section.css"

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    message: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/book-appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <section id='bookappointment' className="rounded-2xl shadow-md p-6 container mt-5">
      <h2 className="text-2xl font-semibold mb-4 heading">Book an Appointment</h2>
      <form className='book-appointment-form' onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" placeholder="Name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email" placeholder="Email" required value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="contact" placeholder="Contact Number" required value={form.contact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <select className="form-select" name="gender" required value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="3" name="message" placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Date Range</label>
          <div className="d-flex gap-2">
            <input type="date" className="form-control" name="fromDate" required value={form.fromDate} onChange={handleChange} />
            <input type="date" className="form-control" name="toDate" required value={form.toDate} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Appointment</button>
      </form>
    </section>
  );
}
