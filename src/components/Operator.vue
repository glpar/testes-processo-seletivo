<template>
  <div v-if="currentOperator" class="edit-form py-3">
    <p class="headline">Edit Tutorial</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentOperator.registro"
          :rules="[(v) => !!v || 'Registro ANS is missing']"
          label="Registro_ANS"
          
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cnpj"
          :rules="[(v) => !!v || 'CNPJ is missing']"
          label="CNPJ"
          
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.razao_social"
          :rules="[(v) => !!v || 'Razão Social is missing']"
          label="Razao_Social"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.fantasia"
          :rules="[(v) => !!v || 'Nome Fantasia is missing']"
          label="Nome_Fantasia"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.modalidade"
          :rules="[(v) => !!v || 'Modalidade is missing']"
          label="Modalidade"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.logradouro"
          :rules="[(v) => !!v || 'Logradouro is missing']"
          label="Logradouro"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.numero"
          :rules="[(v) => !!v || 'Numero is missing']"
          label="Numero"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.complemento"
          :rules="[(v) => !!v || 'Complemento is missing']"
          label="Complemento"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.bairro"
          :rules="[(v) => !!v || 'Bairro is missing']"
          label="Bairro"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cidade"
          :rules="[(v) => !!v || 'Cidade is missing']"
          label="Cidade"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.uf"
          :rules="[(v) => !!v || 'UF is missing']"
          label="UF"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cep"
          :rules="[(v) => !!v || 'CEP is missing']"
          label="CEP"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.ddd"
          :rules="[(v) => !!v || 'DDD is missing']"
          label="DDD"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.telefone"
          :rules="[(v) => !!v || 'Telefone is missing']"
          label="Telefone"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.fax"
          :rules="[(v) => !!v || 'Fax is missing']"
          label="Fax"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.email"
          :rules="[(v) => !!v || 'E-mail is missing']"
          label="E-mail"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.representante"
          :rules="[(v) => !!v || 'Representante is missing']"
          label="Representante"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cargo"
          :rules="[(v) => !!v || 'Cargo is missing']"
          label="Cargo"
          
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.data_registro"
          :rules="[(v) => !!v || 'Data is missing']"
          label="Data"
          
        ></v-text-field>
      <v-btn color="error" small class="mr-2" @click="deleteOperator">
        Delete
      </v-btn>
      <v-btn color="success" small @click="updateOperator">
        Update
      </v-btn>
    </v-form>
    <p class="mt-3">{{ message }}</p>
  </div>
  <div v-else>
    <p>Please click on a operator...</p>
  </div>
</template>
<script>
import OperatorDataService from "../services/OperatorDataService";
export default {

  name: "op-test",
  data() {
    return {
      currentOperator: null,
      message: "",
    };
  },
  methods: {
    getOperator(id) {
      OperatorDataService.get(id)
        .then((response) => {
          this.currentOperator = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentOperator.id,
        registro: this.currentOperator.registro,
        cnpj: this.currentOperator.cnpj,
        razao_social:this.currentOperator.razao_social,
        fantasia: this.currentOperator.fantasia,
        modalidade: this.currentOperator.modalidade,
        logradouro: this.currentOperator.logradouro,
        numero: this.currentOperator.numero,
        complemento: this.currentOperator.complemento,
        bairro: this.currentOperator.bairro,
        cidade: this.currentOperator.cidade,
        uf: this.currentOperator.uf,
        cep: this.currentOperator.cep,
        ddd: this.currentOperator.ddd,
        telefone: this.currentOperator.telefone,
        fax: this.currentOperator.fax,
        email: this.currentOperator.email,
        representante: this.currentOperator.representante,
        cargo: this.currentOperator.cargo,
        data_registro: this.currentOperator.data_registro,
      };
      OperatorDataService.update(this.currentOperator.id, data)
        .then((response) => {
          this.currentOperator.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateOperator() {
      OperatorDataService.update(this.currentOperator.id, this.currentOperator)
        .then((response) => {
          console.log(response.data);
          this.message = "The Operator was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteOperator() {
      OperatorDataService.delete(this.currentOperator.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "op-test" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getOperator(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>