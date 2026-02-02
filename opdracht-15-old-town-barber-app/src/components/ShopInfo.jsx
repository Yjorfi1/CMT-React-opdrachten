export default function ShopInfo({ shop }) {
  return (
    <>
    <h1>Old town barbershop</h1>
    <section >
      <p >{shop.time}</p>
 
      {shop.services.map((s) => (
        <section key={s.id} >
          <span>{s.name}</span>
          <span>€ {s.price}</span>
        </section>
      ))}
    </section>
    </>
  );
}