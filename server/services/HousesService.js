import mongoose from "mongoose";
import House from "../models/House";

const _repository = mongoose.model("House", House);

class HousesService {
  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id)
  }

  async create(rawData) {
    return await _repository.create(rawData)
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
}

const housesService = new HousesService();
export default housesService;
