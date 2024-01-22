
function Card(props) {
    return (
      <div className="container">
        <div className="card">
          <div className="image"></div>
          <h3>{props.name || "no name"}</h3>
          <p>{props.stutus || "null"} </p>
          <p>{props.p || "null0"}</p>
        </div>
      </div>
    );
  }
  

  export default Card;