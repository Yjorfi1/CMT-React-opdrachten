// BookingForm Component - datum input voorbeeld
// de rest van het formulier en component maak je zelf
const Appointment = ({saveAppointment}) => {
    const [option, setOption] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!option || !date || !time){
            toast.error("Vul alle velden in 😡");
            return;
        }
        saveProfile({option, date, time})
    }
  return ( 
    <>
  <h1>vul in</h1>

  
  <div>
    <form onSubmit={handleSubmit}>
 <label htmlFor="selection">Kies een optie:</label>
  <select name="selection" value={FormData.option}>
  <option value="cut">knippen</option>
  <option value="dye">Verfen</option>
  <option value="bald">Alles scheren</option>
  <option value="wig">Pruik</option>
</select>


    {/* <label className="block font-medium mb-1">Datum *</label>
  <input
    type="date"
    value={formData.date}
    onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
    min={new Date().toISOString().split('T')[0]}
    className="w-full p-2 border rounded"
  /> */}
 
<label htmlFor="time">Kies een tijd:</label>
<input type="time" name="time" min="09:00" max="17:00"  value={FormData.time}/>

            <button type="submit">Form verzenden</button>
            </form>
</div> 


</>);
}

export default BookingForm;


