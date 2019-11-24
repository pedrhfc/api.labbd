const User = require("../models/User");

class UserRepository {
  constructor(model) {
    this.model = model;
  }

  create(User) {
    const user = new this.model(User);

    return user.save();
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  updateById(id, User) {
    return this.model.findOneAndUpdate({_id: id}, { $set: { ...User } });
  }

  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository(User);
