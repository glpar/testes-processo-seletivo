module.exports = (sequelize, Sequelize) => {
    const Operator = sequelize.define("operator", {
        registro: {
        type: Sequelize.INTEGER
      },
        cnpj: {
        type: Sequelize.INTEGER
      },
        razao_social: {
        type: Sequelize.STRING
      },
        fantasia: {
        type: Sequelize.STRING
      },
        modalidade: {
        type: Sequelize.STRING
      },
        logradouro: {
        type: Sequelize.STRING
      },
        numero: {
        type: Sequelize.INTEGER
      },
        complemento: {
        type: Sequelize.STRING
      },
        bairro: {
        type: Sequelize.STRING
      },
        cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.INTEGER
      },
      ddd: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      fax: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      representante: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      data_registro: {
        type: Sequelize.STRING
      },

      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Operator;
  };