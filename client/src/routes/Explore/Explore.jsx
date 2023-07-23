import ArrowDown from "../../assets/image/arrow-down.jsx";
import "./Explore.css";
import Environtment from "../../component/Dropdown/Environtment";
import Region from "../../component/Dropdown/Region";
import Type from "../../component/Dropdown/Type";
import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";

function Explore() {
  const data = useLoaderData();
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <section
        className="explore-hero"
        style={{ background: 'url("takahe.jpg") center/cover no-repeat' }}
      >
        <div className="explore-hero-body">
          <p className="explore-hero-title"> Explore </p>
          <p className="explore-hero-subtitle">
            Welcome To Explore, Find Animals Around the World
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
          {navigation.state === "loading" ? (
            <h2>Loading...</h2>
          ) : (
            data.animals.map((animal) => (
              <Link
                to={"/description/" + animal.animal_id}
                key={animal.animal_id}
              >
                <div className="list-name" key={animal.id}>
                  <img
                    className="list-animal-img"
                    src={animal.image}
                    alt={animal.animal_name}
                  />
                  <h3>{animal.animal_name}</h3>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Explore;
