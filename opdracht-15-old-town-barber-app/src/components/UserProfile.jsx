import { useState } from "react";
import { toast } from "react-toastify";
import { setUserProfile } from "../utils/localStorage";
 
const UserProfile = ({ onSave, defaultValues }) => {
  const [form, setForm] = useState(defaultValues || { name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const Save = () => {
    if (!form.name || !form.email || !form.phone)
      return toast.error("Alle velden invullen");

    setUserProfile(form);
    toast.success("Opgeslagen");
    onSave(form);
  };

 
  return (
    <div >
      <h2 >Jouw Profiel</h2>
 
      <input placeholder="Naam" name="name" value={form.name} onChange={handleChange}/>
      <input placeholder="Email" name="email"value={form.email} onChange={handleChange}/>
      <input placeholder="Telefoon" name="phone" onChange={handleChange}value={form.phone}/>
 
      <button onClick={Save}>
        Opslaan
      </button>
    </div>
  );
};

export default UserProfile;
 