import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css";
import Environtment from "../../component/Dropdown/Environtment";
import Region from "../../component/Dropdown/Region";
import Type from "../../component/Dropdown/Type";
import React from "react";

const animalList = [
  {
    src: "pikachu.jpg",
    alt: "Iki Pika",
    name: "Iki Pika",
  },
  {
    src: "barbary-singa-atlas.jpg",
    alt: "Singa Atlas",
    name: "Singa Atlas",
  },
  {
    src: "berang-berang.jpg",
    alt: "Berang-Berang",
    name: "Berang-Berang",
  },
  {
    src: "karakalo-australia.jpg",
    alt: "Karakalo Australia",
    name: "Karakalo Australia",
  },
  {
    src: "lesser-bilby.jpg",
    alt: "Lesser Bilby",
    name: "Lesser Bilby",
  },
  {
    src: "takahe.jpg",
    alt: "Takahe",
    name: "Takahe",
  },
  {
    src: "elang-harpa.jpg",
    alt: "Elang Harpa",
    name: "Elang Harpa",
  },
  {
    src: "katak-pinokio.jpg",
    alt: "Katak Pinokio",
    name: "Katak Pinokio",
  },
  {
    src: "anglerfish.jpg",
    alt: "Angler Fish",
    name: "Angler Fish",
  },
];

function Explore() {
  return (
    <React.Fragment>
      <section className="explore-hero" style={{background: 'url("takahe.jpg") center/cover no-repeat'}}>
        <div className="explore-hero-body">
          <p className="explore-hero-title">welcome </p>
          <p className="explore-hero-subtitle">
          To explore animals around the world
          </p>
          <div className="arrow-down">
            <ArrowDown />
          </div>
        </div>
      </section>
      <section className="filter">
        <div className="container">
          <div className="row">
            <div className="filter-animal-type">
              <h5> Type </h5>
              <Type />
            </div>
            <div className="filter-animal-region">
              <h5> Region </h5>
              <Region />
            </div>
            <div className="filter-animal-environtment">
              <h5> Environment </h5>
              <Environtment />
            </div>
            <div className="container-2">
              <div className="row-2">
                <div className="button-filter">
                  <button className="filter-button-filter"> Filter </button>
                </div>
                <div className="button-reset">
                  <button className="filter-button-reset"> Reset </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="list-animal">
        <div className="list-container">
          {animalList.map((animal, index) => (
            <div className="list-name" key={index}>
              <img
                className="list-animal-img"
                src={animal.src}
                alt={animal.alt}
              />
            <h3>{animal.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Explore;
