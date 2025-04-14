
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Update state when user types
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // On form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out, " + formData.name + "!");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
