import "./index.css";

const Productcard = (props) => {
  return (
    <div key={props.id}>
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <img className="img" src={props.image} alt="Image Loading Error" />
    </div>
  );
};

export default Productcard;
