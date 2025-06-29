const Pet = require('../models/Pet');

const findAllPaginated = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const pets = await Pet.find().skip(skip).limit(limit);
  const total = await Pet.countDocuments();
  return {
    pets,
    currentPage: page,
    totalPages: Math.ceil(total / limit)
  };
};

module.exports = {
  findAllPaginated
};
