const Weatherinfo = ({ city, temp, feels_like, speed, humidity }) => {
  return (
    <div>
      <h1>Stad: {city}</h1>
      <p>Temperatuur: {temp} graden celsius</p>
      <p>voelt als: {feels_like} graden celsius</p>
      <p>Windsnelheid: {speed} meter per seconde</p>
      <p>Vochtigheid: {humidity}%</p>
    </div>
  );
};

export default Weatherinfo;