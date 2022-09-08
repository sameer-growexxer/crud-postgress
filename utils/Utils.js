class Utils {
  static errorResponse() {
    return JSON.parse(
      JSON.stringify({
        data: {},
        message: "",
      })
    );
  }

  static successResponse() {
    return JSON.parse(
      JSON.stringify({
        data: {},
        message: "",
      })
    );
  }

  /**
   * @param {Object|string} error Error Message
   * @param {Object} data Object to send in response
   * @param {Object} res Response Object
   * @param {string} message message
   */
  static async sendResponse(error, data, res, message) {
    let responseObject;
    if (error) {
      let status;
      responseObject = Utils.errorResponse();
      if (typeof error === "object") {
        responseObject.message = error.message || message;
        status = error[1] ? error[1] : 400;
      } else {
        responseObject.message = error;
        status = 400;
      }
      res.status(status).send(responseObject);
      return;
    }

    responseObject = Utils.successResponse();
    responseObject.data = data;
    responseObject.message = message;
    res.status(200).send(responseObject);
  }
}

module.exports = Utils;
