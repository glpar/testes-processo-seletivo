<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Operators</v-card-title>
        <v-data-table
          :headers="headers"
          :items="operators"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editOperator(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteOperator(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>
        <v-card-actions v-if="operators.length > 0">
          <v-btn small color="error" @click="removeAllOperators">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import OperatorDataService from "../services/OperatorDataService";
export default {
  name: "operators-list",
  data() {
    return {
      operators: [],
      title: "",
      headers: [
        { text: "Registro ANS", align: "start", sortable: false, value: "registro" },
        { text: "CNPJ", value: "cnpj", sortable: false },
        { text: "Razão Social", value: "razao_social", sortable: false },
        { text: "Nome Fantasia", value: "fantasia", sortable: false },
        { text: "Modalidade", value: "modalidade", sortable: false },
        { text: "Logradouro", value: "logradouro", sortable: false },
        { text: "Numero", value: "numero", sortable: false },
        { text: "Complemento", value: "complemento", sortable: false },
        { text: "Bairro", value: "bairro", sortable: false },
        { text: "Cidade", value: "cidade", sortable: false },
        { text: "UF", value: "uf", sortable: false },
        { text: "CEP", value: "cep", sortable: false },
        { text: "DDD", value: "ddd", sortable: false },
        { text: "Telefone", value: "telefone", sortable: false },
        { text: "Fax", value: "fax", sortable: false },
        { text: "Endereco eletronico", value: "email", sortable: false },
        { text: "Representante", value: "representante", sortable: false },
        { text: "Cargo Representante", value: "cargo", sortable: false },
        { text: "Data Registro ANS", value: "data_registro", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveOperators() {
      OperatorDataService.getAll()
        .then((response) => {
          this.operators = response.data.map(this.getDisplayOperator);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveOperators();
    },
    removeAllOperators() {
      OperatorDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchTitle() {
      OperatorDataService.findByTitle(this.title)
        .then((response) => {
          this.operators = response.data.map(this.getDisplayOperator);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editOperator(id) {
      this.$router.push({ name: "operator-details", params: { id: id } });
    },
    deleteOperator(id) {
      OperatorDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDisplayOperator(operator) {
      return {
        id: operator.id,
        registro: operator.registro.length > 30 ? operator.registro.substr(0, 30) + "..." : operator.registro,
        cnpj: operator.cnpj.length > 30 ? operator.cnpj.substr(0, 30) + "..." : operator.cnpj,
        razao_social: operator.razao_social.length > 30 ? operator.razao_social.substr(0, 30) + "..." : operator.razao_social,
        fantasia: operator.fantasia.length > 30 ? operator.fantasia.substr(0, 30) + "..." : operator.fantasia,
        modalidade: operator.modalidade.length > 30 ? operator.modalidade.substr(0, 30) + "..." : operator.modalidade,
        logradouro: operator.logradouro.length > 30 ? operator.logradouro.substr(0, 30) + "..." : operator.logradouro,
        numero: operator.numero.length > 30 ? operator.numero.substr(0, 30) + "..." : operator.numero,
        complemento: operator.complemento.length > 30 ? operator.complemento.substr(0, 30) + "..." : operator.complemento,
        bairro: operator.bairro.length > 30 ? operator.bairro.substr(0, 30) + "..." : operator.bairro,
        cidade: operator.cidade.length > 30 ? operator.cidade.substr(0, 30) + "..." : operator.cidade,
        uf: operator.uf.length > 30 ? operator.uf.substr(0, 30) + "..." : operator.uf,
        cep: operator.cep.length > 30 ? operator.cep.substr(0, 30) + "..." : operator.cep,
        ddd: operator.ddd.length > 30 ? operator.ddd.substr(0, 30) + "..." : operator.ddd,
        telefone: operator.telefone.length > 30 ? operator.telefone.substr(0, 30) + "..." : operator.telefone,
        fax: operator.fax.length > 30 ? operator.fax.substr(0, 30) + "..." : operator.fax,
        email: operator.email.length > 30 ? operator.email.substr(0, 30) + "..." : operator.email,
        representante: operator.representante.length > 30 ? operator.representante.substr(0, 30) + "..." : operator.representante,
        cargo: operator.cargo.length > 30 ? operator.cargo.substr(0, 30) + "..." : operator.cargo,
        data_registro: operator.data_registro.length > 30 ? operator.data_registro.substr(0, 30) + "..." : operator.data_registro,
        
      };
    },
  },
  mounted() {
    this.retrieveOperators();
  },
};
</script>
<style>
.list {
  max-width: 750px;
}
</style>