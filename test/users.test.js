require("dotenv").config();

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const assert = chai.assert;
const request = require("supertest");
chai.use(chaiHttp);
const TestCase = require("./testcase/users.testcase");

describe("create user", function () {
  this.timeout(20000);
  TestCase.createUsers.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .post("/user")
        .send(data.options)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});

describe("get all users", function () {
  this.timeout(20000);
  TestCase.getUsers.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .get("/users")
        .query(data.options)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});

describe("Update user", function () {
  this.timeout(20000);
  TestCase.updateUser.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .put("/user")
        .query(data.options)
        .send(data.body)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});

describe("Login user", function () {
  this.timeout(20000);
  TestCase.loginUser.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .post("/login")
        .send(data.options)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});

describe("Delete user", function () {
  this.timeout(20000);
  TestCase.deleteUser.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .delete("/user")
        .query(data.options)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});

describe("Delete Multiple users", function () {
  this.timeout(20000);
  TestCase.deleteMultiUser.forEach((data) => {
    it(data.it, (done) => {
      request(process.env.BASE_URL)
        .delete("/users")
        .query(data.options)
        .end((err, res) => {
          expect(res.body.status).to.be.status;
          assert.equal(res.body.status, data.status);
          done();
        });
    });
  });
});
