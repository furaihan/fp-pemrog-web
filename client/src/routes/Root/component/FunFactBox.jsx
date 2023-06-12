import "./FunFactBox.css";
import PropTypes from "prop-types";

export default function FunFactBox(props) {
  return (
    <div className="fun-fact-item">
      <div className="fun-fact-item-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="fun-fact-item-title">{props.title}</div>
      <div className="fun-fact-item-subtitle">
        <p>{props.subtitle}</p>
        </div>
      <div className="fun-fact-item-link">
        <button type="button">Read More</button>
      </div>
    </div>
  );
}

FunFactBox.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
