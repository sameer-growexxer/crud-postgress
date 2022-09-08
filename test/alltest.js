const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);
const request = require("supertest");
request(app);

require("./users.test");
