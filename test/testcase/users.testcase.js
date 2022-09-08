module.exports = {
  createUsers: [
    {
      it: "As a user I should validate if all fields are there or not",
      options: {
        name: "sameer",
        phone: "+91-7878878705",
      },
    },
    {
      it: "As a user I should validate if email is valid or not",
      options: {
        name: "sameer",
        email: "test",
        password: "test@Growexx123",
        phone: "+917878787050",
        status: "active",
      },
    },
    {
      it: "As a user I should validate if password is valid or not",
      options: {
        name: "sameer",
        email: "test@gmail.com",
        password: "test",
        phone: "+917878787050",
        status: "active",
      },
    },
    {
      it: "As a user I should create user after all successfull validation",
      options: {
        name: "admin",
        email: "admin@gmail.com",
        password: "test@Growexx123",
        phone: "+917878787050",
        status: "active",
      },
    },
  ],
  getUsers: [
    {
      it: "As a user I should get all users",
      options: {},
    },
    {
      it: "As a user I should get all users whose name is similar",
      options: {
        name: "sam",
      },
    },
    {
      it: "As a user I should get all users whose email is similar",
      options: {
        email: "test@gmail.com",
      },
    },
  ],
  updateUser: [
    {
      it: "As a user I should validate is userId is pass or not",
      options: {},
    },
    {
      it: "As a user I should validate if email exist then valid or not",
      options: {
        id: 6,
      },
      body: {
        email: "test.email",
      },
    },
    {
      it: "As a user I should update the user successfuly",
      options: {
        id: 6,
      },
      body: {
        email: "sameer@gmail.com",
      },
    },
  ],
  loginUser: [
    {
      it: "As a user I should validate is email is exist or not",
      options: {},
    },
    {
      it: "As a user I should validate is password is exist or not",
      options: {
        email: "sameer@gmail.com",
      },
    },
    {
      it: "As a user I should validate is user logged in successfuly",
      options: {
        email: "sameer@gmail.com",
        password: "Samer@123",
      },
    },
  ],
  deleteUser: [
    {
      it: "As a user I should validate is id is exist or not",
      options: {},
    },
    {
      it: "As a user I should delete user",
      options: {
        id: "7",
      },
    },
  ],
  deleteMultiUser: [
    {
      it: "As a user I should validate is id array is exist or not",
      options: {},
    },
    {
      it: "As a user I should validate is id array is empty or not",
      options: {
        id: [],
      },
    },
    {
      it: "As a user I should delete user",
      options: {
        id: ["7"],
      },
    },
  ],
};
