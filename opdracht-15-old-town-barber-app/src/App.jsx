import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserProfile, getAppointments, setAppointments } from "./utils/localStorage";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import Form from "./components/Form";
import BookingsList from "./components/BookingsList";
 
const shopData = {
  name: "Old Town Barber",
  time: "Maandag tot vrijdag: 09:00 - 18:30",
  services: [
    { id: 1, name: "Knippen", price: 25 },
    { id: 2, name: "Haar verfen", price: 102 },
    { id: 3, name: "Alles afscheren", price: 15 },
    { id: 4, name: "Wassen + knippen", price: 33.55 },
  ],
};
 
export default function App() {
  const [user, setUser] = useState(getUserProfile());
  const [appointments, setAppointmentsState] = useState(getAppointments());
 
  
 
 
  const handleUpdate = (updated) => {
    setAppointments(updated);
    setAppointmentsState(updated);
  };
 
  if (!user) return <UserProfile onSave={setUser} />;

 useEffect(() => {
    const now = new Date();
    appointments.forEach((a) => {
      const time = new Date(`${a.date}T${a.time}`);
      const diff = (time - now) / 60000;
      if (diff > 0 && diff < 15) {
        toast.info(`Je afspraak is in 15 minuten`);
      }
    });
  }, [appointments]);
  return (
    <div>
      <ToastContainer />
 
      
 
      <div >
        <Form
          user={user}
          shop={shopData}
          appointments={appointments}
          onNewAppointments={handleUpdate}
        />
        <ShopInfo shop={shopData} />
        <BookingsList appointments={appointments} />

      </div>
    </div>
    
  );
  
}

 
 