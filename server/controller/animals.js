const { Animal, Description } = require("../models");

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

const getRandomAnimal = async (req, res) => {
  const { count } = req.body;
  try {
    const animals = await Animal.findAll({
      include: {
        model: Description,
        attributes: ["title", "description", "image", "fun_fact"],
      },
    });
    const randomAnimals = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * animals.length);
      randomAnimals.push(animals[randomIndex]);
    }
    res.json({ animals: randomAnimals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAnimals, getRandomAnimal };
