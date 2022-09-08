module.exports = (swaggerJson) => {
  swaggerJson.paths["/users"] = {
    get: {
      tags: ["User"],
      description: "get all users or searchBy name or searchBy email",
      summary: "get all users or searchBy name or searchBy email",
      parameters: [
        {
          in: "query",
          name: "name",
          description: "users similar to name",
          required: false,
          type: "string",
          example: "Sameer",
        },
        {
          in: "query",
          name: "email",
          description: "users similar to email",
          required: false,
          type: "string",
          example: "test@gmail.com",
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/success",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
    delete: {
      tags: ["User"],
      description: "Delete multiple users",
      summary: "Delete multiple users",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "add user body",
          required: true,
          schema: {
            $ref: "#/definitions/deletemultiUser",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/success",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
  };

  swaggerJson.paths["/user"] = {
    post: {
      tags: ["User"],
      description: "Add user",
      summary: "Add user",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "add user body",
          required: true,
          schema: {
            $ref: "#/definitions/addUserBody",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/addUserBody",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
    put: {
      tags: ["User"],
      description: "Update user",
      summary: "Update user",
      parameters: [
        {
          in: "query",
          name: "id",
          description: "User Id",
          required: true,
          type: "string",
        },
        {
          in: "body",
          name: "body",
          description: "edit user body",
          required: true,
          schema: {
            $ref: "#/definitions/addUserBody",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/success",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
    delete: {
      tags: ["User"],
      description: "Delete user",
      summary: "Delete user",
      parameters: [
        {
          in: "query",
          name: "id",
          description: "User Id",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/success",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
  };

  swaggerJson.paths["/login"] = {
    post: {
      tags: ["User"],
      description: "Login User",
      summary: "Login User",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "login user body",
          required: true,
          schema: {
            $ref: "#/definitions/loginUserBody",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          schema: {
            $ref: "#/definitions/addUserBody",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/fail",
          },
        },
        500: {
          description: "Internal Server Error",
          schema: {
            $ref: "#/definitions/unexpextedError",
          },
        },
      },
    },
  };
  swaggerJson.definitions.loginUserBody = {
    type: "object",
    properties: {
      email: {
        type: "string",
        require: false,
        example: "it.admin@growexx.com",
      },
      password: {
        type: "string",
        require: false,
        example: "sammer@Growexx123",
      },
    },
  };

  swaggerJson.definitions.addUserBody = {
    type: "object",
    properties: {
      name: {
        type: "string",
        required: false,
        example: "Sameer Sharma",
      },
      email: {
        type: "string",
        required: false,
        example: "test@gmail.com",
      },
      password: {
        type: "string",
        required: false,
        example:
          "password must 1 small,1 capital, 1 speical character, 1 number",
      },
      phone: {
        type: "string",
        required: false,
        example: "+91-9409409478",
      },
      status: {
        type: "string",
        required: false,
        example: "active",
      },
    },
  };

  swaggerJson.definitions.deletemultiUser = {
    type: "object",
    properties: {
      id: {
        type: "array",
        required: true,
        example: [4, 5],
      },
    },
  };

  swaggerJson.definitions.success = {
    properties: {
      status: {
        type: "number",
        example: 0,
      },
      message: {
        example: "Success",
      },
    },
  };

  swaggerJson.definitions.fail = {
    properties: {
      status: {
        type: "number",
        example: 0,
      },
      message: {
        example: "User can not run this API",
      },
    },
  };

  swaggerJson.definitions.unexpextedError = {
    properties: {
      status: {
        type: "number",
        example: 0,
      },
      message: {
        example: "Something went wrong please try again",
      },
    },
  };

  return swaggerJson;
};
