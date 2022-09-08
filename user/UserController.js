const UserService = require("./UserService");
const Utils = require("../utils/Utils");

class UserController {
  /**
   * @desc Add user
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async addUser(req, res) {
    try {
      const data = await new UserService().addUser(req, res);
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }

  /**
   * @desc get all user or search by Name Or Search by Email
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async getUsersOrByNameOrByEmail(req, res) {
    try {
      const data = await new UserService().getUsersOrByNameOrByEmail(req, res);
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }

  /**
   * @desc update user by id
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async updateUser(req, res) {
    try {
      const data = await new UserService().updateUser(req, res);
      data.push({ updatedRaw: 1, message: "Updateded Successfully" });
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }

  /**
   * @desc delete user by id
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async deleteUser(req, res) {
    try {
      const data = await new UserService().deleteUser(req, res);
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }

  /**
   * @desc delete multi users
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async deleteUsers(req, res) {
    try {
      const data = await new UserService().deleteUsers(req, res);
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }

  /**
   * @desc login user
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async loginUser(req, res) {
    try {
      const data = await new UserService().loginUser(req, res);
      if (data.length === 0) {
        res.send({ message: "Please enter valid Email and password" });
      }
      Utils.sendResponse(null, data, res, "Success");
    } catch (error) {
      Utils.sendResponse(error, null, res, error);
    }
  }
}

module.exports = UserController;
