module.exports = app => {
    const operators = require("../controllers/operator.controller.js");
    var router = require("express").Router();
    // Create a new Operator
    router.post("/", operators.create);
    // Retrieve all Operators
    router.get("/", operators.findAll);
    // Retrieve all published Operators
    router.get("/published", operators.findAllPublished);
    // Retrieve a single Operator with id
    router.get("/:id", operators.findOne);
    // Update a Operator with id
    router.put("/:id", operators.update);
    // Delete a Operator with id
    router.delete("/:id", operators.delete);
    // Create a new Operator
    router.delete("/", operators.deleteAll);
    app.use('/api/operators', router);
  };