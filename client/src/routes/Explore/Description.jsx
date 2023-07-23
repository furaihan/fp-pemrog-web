import "./Description.css";
import ArrowDown from "../../assets/image/arrow-down.jsx";
import { useParams, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

function Description() {
  const { id } = useParams();
  const animal = useLoaderData();
  const description = animal.animal.description;
  const clean = DOMPurify.sanitize(description);
  console.log("Animal Loader:");
  console.log(animal);
  return (
    <>
      <section
        className="explore-hero"
        style={{
          background:
            'url("/' + animal.animal.image + '") center/cover no-repeat',
        }}
      >
        <div className="explore-hero-body">
          <p className="explore-hero-title">{animal.animal.animal_name}</p>
          <p className="explore-hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </p>
          <div className="arrow-down">
            <ArrowDown />
          </div>
        </div>
      </section>
      <section id="body">
        <div className="container">
          <div className="left">
            <div className="desc">
              <div dangerouslySetInnerHTML={{ __html: clean }} />
            </div>
          </div>
          <div className="right">
            <div className="title">
              <p>
                <b>At a glance</b>
              </p>
              <p className="nama_ilmiah">
                <i>{animal.animal.latin_name}</i>
              </p>
            </div>
            <div className="family">
              <p>
                <b>Family:</b> {animal.animal.family_name}
              </p>
              <p>
                <b>Order:</b> {animal.animal.order_name}
              </p>
              <p>
                <b>Estimated in the wild:</b> Unknown
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
