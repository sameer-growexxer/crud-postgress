class ValidateEmailPassword {
  constructor(body, res) {
    this.body = body;
    this.res = res;
  }

  /**
   * @desc Validate all fields are present or not
   */
  async validateFields() {
    if (!this.body.name) {
      throw new Error("NAME_IS_REQUIRED");
    }

    if (!this.body.phone) {
      throw new Error("PHONE_NUMBER_IS_REQUIRED");
    }

    if (!this.body.status) {
      throw new Error("STATUS_IS_REQUIRED");
    }
  }

  /**
   * @desc email is null or not
   */
  async isEmailExist() {
    let email = this.body.email;
    if (!email) {
      throw new Error("EMAIL_IS_REQUIRED");
    }
  }

  /**
   * @desc Validate email pattern
   */
  async emailValidation() {
    let email = this.body.email;
    if (email) {
      const emailPattern =
        /^[A-Za-z0-9_+#*&?$!.-]+@[A-Za-z0-9_+#*&?$!.-]+.[A-Za-z]{2,}$/;
      if (!email.match(emailPattern)) {
        throw new Error("EMAIL_IS_NOT VALID");
      }
    }
  }

  /**
   * @desc Validate password is null and valid or not
   */
  async isPasswordExist() {
    let password = this.body.password;
    if (!password) {
      throw new Error("PASSWORD_IS_REQUIRED");
    }
  }

  /**
   * @desc Validate password pattern
   */
  async passwordValidation() {
    let password = this.body.password;
    if (password) {
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#+\- "'(|),./:;<=>\\\][^_`{}~])[A-Za-z\d@$!%*?&#+\- "'(|),./:;<=>\\\][^_`{}~]{8,20}$/;
      if (!password.match(passwordPattern)) {
        throw new Error("PASSWORD_IS_NOT VALID");
      }
    }
  }
}

module.exports = ValidateEmailPassword;
