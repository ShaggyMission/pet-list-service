const petRepository = require('../repositories/pet.repository');

const listPets = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const result = await petRepository.findAllPaginated(page, limit);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error listing pets', error });
  }
};

module.exports = {
  listPets
};
