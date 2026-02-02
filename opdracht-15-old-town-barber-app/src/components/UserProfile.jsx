import { useState } from "react";
import { toast } from "react-toastify";
import { setUserProfile } from "../utils/localStorage";
 
const UserProfile = ({ onSave, defaultValues }) => {
 

  const Save = () => {
    if (!form.name || !form.email || !form.phone)
      return toast.error("Alle velden invullen");
 
    setUserProfile(form);
    toast.error(" Opgeslagen");
    onSave(form);
  };
    const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
   const [form, setForm] = useState(defaultValues || { name: "", email: "", phone: "" });

 
  return (
    <div >
      <h2 >Jouw Profiel</h2>
 
      <input placeholder="Naam" value={form.name} onChange={handleChange}/>
      <input placeholder="Email" value={form.email} onChange={handleChange}/>
      <input placeholder="Telefoon"  onChange={handleChange}value={form.phone}/>
 
      <button onClick={Save}>
        Opslaan
      </button>
    </div>
  );
};

export default UserProfile;
 