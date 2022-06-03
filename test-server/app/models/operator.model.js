module.exports = (sequelize, Sequelize) => {
    const Operator = sequelize.define("operator", {
        registro: {
        type: Sequelize.STRING
      },
        cnpj: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      ddd: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
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

    });
    return Operator;
  };