export default function Card(props){
  return (
    <article className="card">
      <img className="card__img" src="https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" />
      <div className="card__body">
        <h2 className="card__title">{props.user}</h2>
        <p className="card__text">This is a simple description for your card. Add details here.</p>
        <button className="card__cta">Button</button>
      </div>
    </article>
  );
}
