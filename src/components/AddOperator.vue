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
          :rules="[(v) => !!v || 'CNPJ is missing']"
          label="CNPJ"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.razao_social"
          :rules="[(v) => !!v || 'Razão Social is missing']"
          label="Razao_Social"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.fantasia"
          :rules="[(v) => !!v || 'Nome Fantasia is missing']"
          label="Nome_Fantasia"
        ></v-text-field>
        <v-text-field
          v-model="operator.modalidade"
          :rules="[(v) => !!v || 'Modalidade is missing']"
          label="Modalidade"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.logradouro"
          :rules="[(v) => !!v || 'Logradouro is missing']"
          label="Logradouro"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.numero"
          :rules="[(v) => !!v || 'Numero is missing']"
          label="Numero"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.complemento"
          :rules="[(v) => !!v || 'Complemento is missing']"
          label="Complemento"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.bairro"
          :rules="[(v) => !!v || 'Bairro is missing']"
          label="Bairro"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.cidade"
          :rules="[(v) => !!v || 'Cidade is missing']"
          label="Cidade"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.uf"
          :rules="[(v) => !!v || 'UF is missing']"
          label="UF"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.cep"
          :rules="[(v) => !!v || 'CEP is missing']"
          label="CEP"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.ddd"
          :rules="[(v) => !!v || 'DDD is missing']"
          label="DDD"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.telefone"
          :rules="[(v) => !!v || 'Telefone is missing']"
          label="Telefone"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.fax"
          :rules="[(v) => !!v || 'Fax is missing']"
          label="Fax"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.email"
          :rules="[(v) => !!v || 'E-mail is missing']"
          label="E-mail"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.representante"
          :rules="[(v) => !!v || 'Representante is missing']"
          label="Representante"
          
        ></v-text-field>
        <v-text-field
          v-model="operator.cargo"
          :rules="[(v) => !!v || 'Cargo is missing']"
          label="Cargo"
         
        ></v-text-field>
        <v-text-field
          v-model="operator.data_registro"
          :rules="[(v) => !!v || 'Data is missing']"
          label="Data"
          
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