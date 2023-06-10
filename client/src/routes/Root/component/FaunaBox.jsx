import PropTypes from "prop-types";

export default function FaunaBox(props) {
  let defaultImage = "";
  return (
    <div className="border-box-fauna-1">
      <div className="fauna-1" style={{backgroundImage: `url(${props.imageURL ? props.imageURL : defaultImage})`}}>
        <h3 className="nama-fauna-1">{props.namaFauna}</h3>
      </div>
    </div>
  );
}

FaunaBox.propTypes = {
  imageURL: PropTypes.string.isRequired,
  namaFauna: PropTypes.string.isRequired,
}

