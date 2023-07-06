const { Animal, Description } = require("../models");

const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      include: {
        model: Description,
        attributes: ["title", "description", "image", "fun_fact"],
      },
    });
    const response = {
      status: "success",
      code: 200,
      animals: animals.map((animal) => {
        return {
          id: animal.id,
          name: animal.name,
          description: animal.Description,
        };
      }),
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRandomAnimal = async (req, res) => {
  const { count } = req.body;
}

module.exports = { getAnimals };
