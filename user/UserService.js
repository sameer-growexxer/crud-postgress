const ValidatoEmailPassword = require("../validator/validateEmailPassword");
const db = require("../model");
const Users = db.users;
const Op = db.Sequelize.Op;

class UserService {
  async emailExistDb(email) {
    const data = await Users.findAll({ where: { email: email } });
    if (data.length <= 0) {
      return false;
    }
    return true;
  }

  /**
   * @desc add user
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async addUser(req, res) {
    const validator = new ValidatoEmailPassword(req.body, res);
    await validator.validateFields();
    await validator.isEmailExist();
    await validator.emailValidation();
    await validator.isPasswordExist();
    await validator.passwordValidation();

    const flag = await this.emailExistDb(req.body.email);

    if (flag) {
      throw new Error("EMAIL_ALREADY_EXIST");
    }

    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      status: req.body.status,
    };

    const data = await Users.create(userData);
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }

  /**
   * @desc get all user or search by Name Or Search by Email
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async getUsersOrByNameOrByEmail(req, res) {
    const name = req.query.name;
    const email = req.query.email;
    let condition;
    if (!name && !email) {
      condition = null;
    } else {
      condition = name
        ? { name: { [Op.iLike]: `%${name}%` } }
        : { email: { [Op.iLike]: `%${email}%` } };
    }
    const data = await Users.findAll({ where: condition });
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }

  /**
   * @desc update user by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async updateUser(req, res) {
    const id = req.query.id;
    if (!id) {
      throw new Error("ID_IS_REQUIRED");
    }

    const validator = new ValidatoEmailPassword(req.body, res);
    await validator.emailValidation();
    await validator.passwordValidation();

    if (req.body.email) {
      const flag = await this.emailExistDb(req.body.email);

      if (flag) {
        throw new Error("EMAIL_ALREADY_EXIST");
      }
    }

    const data = Users.update(req.body, { where: { id: id } });
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }

  /**
   * @desc delete user by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async deleteUser(req, res) {
    const id = req.query.id;

    if (!id) {
      throw new Error("ID_IS_REQUIRED");
    }

    const data = Users.destroy({ where: { id: id } });
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }

  /**
   * @desc delete user by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async deleteUsers(req, res) {
    const idArray = req.body.id;

    if (!idArray) {
      throw new Error("IDS_ARE_REQUIRED");
    }

    if (idArray.length <= 0) {
      throw new Error("IDS_SHOULD_NOT_EMPTY");
    }

    const data = Users.destroy({ where: { id: { [Op.in]: idArray } } });
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }

  /**
   * @desc Login user
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<unknown>}
   */
  async loginUser(req, res) {
    const validator = new ValidatoEmailPassword(req.body, res);
    await validator.isEmailExist();
    await validator.isPasswordExist();

    let email = req.body.email;
    let password = req.body.password;

    const data = Users.findAll({ where: { email: email, password: password } });
    if (data) {
      return data;
    } else {
      throw {
        message: `Something went wrong`,
        statusCode: 400,
      };
    }
  }
}
module.exports = UserService;
