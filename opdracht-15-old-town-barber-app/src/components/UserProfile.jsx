import { useState, useEffect } from "react";

function UserProfile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedForm = localStorage.getItem("UserProfile");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("UserProfile", JSON.stringify(form));
    alert("Opgeslagen");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-name"
        type="text"
        name="name"
        value={form.name}
        placeholder="Naam"
        onChange={handleChange}
        required
      /><br />

      <input
        className="form-email"
        type="email"
        name="email"
        value={form.email}
        placeholder="E-mail"
        onChange={handleChange}
        required
      /><br />

      <input
        className="form-phone"
        type="text"
        name="phone"
        value={form.phone}
        placeholder="Telefoonnummer"
        onChange={handleChange}
        required
      /><br />

      <input className="form-button" type="submit" value="Verzenden" />
    </form>
  );
}

export default UserProfile;
