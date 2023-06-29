import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css";
import Environtment from "../../component/Dropdown/Environtment";
import Region from "../../component/Dropdown/Region";
import Type from "../../component/Dropdown/Type";
import React from "react";

const animalList = [
  {
    src: "./public/pikachu.jpg",
    alt: "Iki Pika",
    name: "Iki Pika",
  },
  {
    src: "./public/barbary-singa atlas.jpg",
    alt: "Singa Atlas",
    name: "Singa Atlas",
  },
  {
    src: "./public/berang-berang.jpg",
    alt: "Berang-Berang",
    name: "Berang-Berang",
  },
  {
    src: "./public/karakalo australia.jpg",
    alt: "Karakalo Australia",
    name: "Karakalo Australia",
  },
  {
    src: "./public/lesser bilby.jpg",
    alt: "Lesser Bilby",
    name: "Lesser Bilby",
  },
  {
    src: "./public/takahe.jpg",
    alt: "Takahe",
    name: "Takahe",
  },
  {
    src: "./public/elang harpa.jpg",
    alt: "Elang Harpa",
    name: "Elang Harpa",
  },
  {
    src: "./public/katak pinokio.jpg",
    alt: "Katak Pinokio",
    name: "Katak Pinokio",
  },
  {
    src: "./public/anglerfish.jpg",
    alt: "Angler Fish",
    name: "Angler Fish",
  },
];

function Explore() {
  return (
    <React.Fragment>
      <section className="explore-hero">
        <div className="explore-hero-body">
          <p className="explore-hero-title">Lorem Ipsum</p>
          <p className="explore-hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
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
              <h3 className="list-animal-name">{animal.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Explore;
