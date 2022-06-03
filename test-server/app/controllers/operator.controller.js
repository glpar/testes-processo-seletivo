const db = require("../models");
const Operator = db.operators;
const Op = db.Sequelize.Op;
// Create and Save a new Operator
exports.create = (req, res) => {
  // Validate request
  if (!req.body.registro) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Operator
  const operator = {
    registro: req.body.registro,
    cnpj: req.body.cnpj,
    razao_social:req.body.razao_social,
    fantasia: req.body.fantasia,
    modalidade: req.body.modalidade,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    complemento: req.body.complemento,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    uf: req.body.uf,
    cep: req.body.cep,
    ddd: req.body.ddd,
    telefone: req.body.telefone,
    fax: req.body.fax,
    email: req.body.email,
    representante: req.body.representante,
    cargo: req.body.cargo,
    data_registro: req.body.data_registro,
    published: req.body.published ? req.body.published : false
  };
  // Save Operator in the database
  Operator.create(operator)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Operator."
      });
    });
};
// Retrieve all Operators from the database.
exports.findAll = (req, res) => {
    const registro = req.query.registro;
    var condition = registro ? { registro: { [Op.iLike]: `%${registro}%` } } : null;
    Operator.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving operators."
        });
      });
};
// Find a single Operator with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Operator.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Operator with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Operator with id=" + id
        });
      });
};
// Update a Operator by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Operator.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operator was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Operator with id=${id}. Maybe Operator was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Operator with id=" + id
        });
      });
};
// Delete a Operator with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Operator.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Operator was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Operator with id=${id}. Maybe Operator was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Operator with id=" + id
        });
      });
};
// Delete all Operators from the database.
exports.deleteAll = (req, res) => {
    Operator.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Operators were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all operators."
          });
        });
};
// Find all published Operators
exports.findAllPublished = (req, res) => {
    Operator.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving operators."
      });
    });
};