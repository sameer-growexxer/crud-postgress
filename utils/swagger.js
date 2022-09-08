require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
let swaggerJson = require("../public/swagger.json");

swaggerJson = require("../user/UserSwagger")(swaggerJson);

const baseURL = process.env.BASE_URL.split("://");
swaggerJson.host = baseURL[1];
swaggerJson.info.description = `HostName / URL : ${swaggerJson.host}`;
swaggerJson.schemes[0] = baseURL[0];

const options = {
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

module.exports = function (router) {
  router.get("/swagger", (req, res) => {
    res.json(swaggerJson);
  });
  router.use("/docs", swaggerUi.serve);
  router.get("/docs", swaggerUi.setup(swaggerJson, options));
};
