<template>
  <div v-if="currentOperator" class="edit-form py-3">
    <p class="headline">Edit Tutorial</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentOperator.registro"
          :rules="[(v) => !!v || 'Registro ANS is required']"
          label="Registro_ANS"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cnpj"
          :rules="[(v) => !!v || 'CNPJ is required']"
          label="CNPJ"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.razao_social"
          :rules="[(v) => !!v || 'Razão Social is required']"
          label="Razao_Social"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.fantasia"
          :rules="[(v) => !!v || 'Nome Fantasia is required']"
          label="Nome_Fantasia"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.modalidade"
          :rules="[(v) => !!v || 'Modalidade is required']"
          label="Modalidade"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.logradouro"
          :rules="[(v) => !!v || 'Logradouro is required']"
          label="Logradouro"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.numero"
          :rules="[(v) => !!v || 'Numero is required']"
          label="Numero"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.complemento"
          :rules="[(v) => !!v || 'Complemento is required']"
          label="Complemento"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.bairro"
          :rules="[(v) => !!v || 'Bairro is required']"
          label="Bairro"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cidade"
          :rules="[(v) => !!v || 'Cidade is required']"
          label="Cidade"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.uf"
          :rules="[(v) => !!v || 'UF is required']"
          label="UF"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cep"
          :rules="[(v) => !!v || 'CEP is required']"
          label="CEP"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.ddd"
          :rules="[(v) => !!v || 'DDD is required']"
          label="DDD"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.telefone"
          :rules="[(v) => !!v || 'Telefone is required']"
          label="Telefone"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.fax"
          :rules="[(v) => !!v || 'Fax is required']"
          label="Fax"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.email"
          :rules="[(v) => !!v || 'E-mail is required']"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.representante"
          :rules="[(v) => !!v || 'Representante is required']"
          label="Representante"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.cargo"
          :rules="[(v) => !!v || 'Cargo is required']"
          label="Cargo"
          required
        ></v-text-field>
        <v-text-field
          v-model="currentOperator.data_registro"
          :rules="[(v) => !!v || 'Data is required']"
          label="Data"
          required
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
    <p>Please click on a Tutorial...</p>
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
          this.message = "The tutorial was updated successfully!";
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