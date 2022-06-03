<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Operators</p>
    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="operator.registro"
          :rules="[(v) => !!v || 'Registro ANS is required']"
          label="Registro_ANS"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.cnpj"
          :rules="[(v) => !!v || 'CNPJ is required']"
          label="CNPJ"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.razao_social"
          :rules="[(v) => !!v || 'Razão Social is required']"
          label="Razao_Social"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.fantasia"
          :rules="[(v) => !!v || 'Nome Fantasia is required']"
          label="Nome_Fantasia"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.modalidade"
          :rules="[(v) => !!v || 'Modalidade is required']"
          label="Modalidade"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.logradouro"
          :rules="[(v) => !!v || 'Logradouro is required']"
          label="Logradouro"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.numero"
          :rules="[(v) => !!v || 'Numero is required']"
          label="Numero"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.complemento"
          :rules="[(v) => !!v || 'Complemento is required']"
          label="Complemento"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.bairro"
          :rules="[(v) => !!v || 'Bairro is required']"
          label="Bairro"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.cidade"
          :rules="[(v) => !!v || 'Cidade is required']"
          label="Cidade"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.uf"
          :rules="[(v) => !!v || 'UF is required']"
          label="UF"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.cep"
          :rules="[(v) => !!v || 'CEP is required']"
          label="CEP"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.ddd"
          :rules="[(v) => !!v || 'DDD is required']"
          label="DDD"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.telefone"
          :rules="[(v) => !!v || 'Telefone is required']"
          label="Telefone"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.fax"
          :rules="[(v) => !!v || 'Fax is required']"
          label="Fax"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.email"
          :rules="[(v) => !!v || 'E-mail is required']"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.representante"
          :rules="[(v) => !!v || 'Representante is required']"
          label="Representante"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.cargo"
          :rules="[(v) => !!v || 'Cargo is required']"
          label="Cargo"
          required
        ></v-text-field>
        <v-text-field
          v-model="operator.data_registro"
          :rules="[(v) => !!v || 'Data is required']"
          label="Data"
          required
        ></v-text-field>
      </v-form>
      <v-btn color="primary" class="mt-3" @click="saveOperator">Submit</v-btn>
    </div>
    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>
        <v-card-subtitle>
          Click the button to add new Operator.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="success" @click="newOperator">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import OperatorDataService from "../services/OperatorDataService";
export default {
  name: "add-operator",
  data() {
    return {
      operator: {
        id: null,
        registro: "",
        cnpj: "",
        razao_social:"",
        fantasia: "",
        modalidade: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        ddd: "",
        telefone: "",
        fax: "",
        email: "",
        representante: "",
        cargo: "",
        data_registro: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveOperator() {
      var data = {
        registro: this.operator.registro,
        cnpj: this.operator.cnpj,
        razao_social:this.operator.razao_social,
        fantasia: this.operator.fantasia,
        modalidade: this.operator.modalidade,
        logradouro: this.operator.logradouro,
        numero: this.operator.numero,
        complemento: this.operator.complemento,
        bairro: this.operator.bairro,
        cidade: this.operator.cidade,
        uf: this.operator.uf,
        cep: this.operator.cep,
        ddd: this.operator.ddd,
        telefone: this.operator.telefone,
        fax: this.operator.fax,
        email: this.operator.email,
        representante: this.operator.representante,
        cargo: this.operator.cargo,
        data_registro: this.operator.data_registro,
      };
      OperatorDataService.create(data)
        .then((response) => {
          this.operator.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newOperator() {
      this.submitted = false;
      this.operator = {};
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
}
</style>