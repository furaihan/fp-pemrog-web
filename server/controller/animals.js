const { Animal, Description } = require("../models");
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];
const sequelize = new Sequelize(db);

const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      attributes: ["animal_id", "animal_name"],
      include: [
        {
          model: Description,
          attributes: ["image"],
        },
      ],
    });

    const animalData = animals.map((animal) => {
      return {
        animal_id: animal.animal_id,
        animal_name: animal.animal_name,
        image: animal.Description.image,
      };
    });

    const response = {
      status: "success",
      code: 200,
      animals: animalData,
    };

    return res.json(response);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };

    return res.status(500).json(response);
  }
};

const getRandomAnimalsFunFact = async (req, res) => {
  const { count } = req.params;
  try {
    const animals = await Animal.findAll({
      attributes: ["animal_id", "animal_name"],
      include: [
        {
          model: Description,
          attributes: ["fun_fact", "image"],
        },
      ],
      order: sequelize.random(),
      limit: parseInt(count) || 3,
    });

    const animalData = animals.map((animal) => {
      return {
        animal_id: animal.animal_id,
        animal_name: animal.animal_name,
        image: animal.Description.image,
        fun_fact: animal.Description.fun_fact,
      };
    });

    const response = {
      status: "success",
      code: 200,
      animals: animalData,
    };

    return res.json(response);
  } catch (error) {
    console.error(error);

    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };

    return res.status(response.code).json(response);
  }
};

const getAnimalById = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await Animal.findOne({
      where: {
        animal_id: id,
      },
      attributes: [
        "animal_id",
        "animal_name",
        "latin_name",
        "family_name",
        "order_name",
      ],
      include: [
        {
          model: Description,
          attributes: ["image", "description", "title"],
        },
      ],
    });
    const response = {
      status: "success",
      code: 200,
      animal: {
        animal_id: animal.animal_id,
        animal_name: animal.animal_name,
        latin_name: animal.latin_name,
        family_name: animal.family_name,
        order_name: animal.order_name,
        image: animal.Description.image,
        description: animal.Description.description,
        title: animal.Description.title,
      },
    };
    return res.json(response);
  } catch (error) {
    console.error(error);
    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };
    return res.status(response.code).json(response);
  }
};

module.exports = { getAnimals, getRandomAnimalsFunFact, getAnimalById };
