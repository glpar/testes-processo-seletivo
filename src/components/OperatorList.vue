<template>
  <v-card>
    <v-container>
      <v-row >
    <!-- <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col> -->
    <!-- <v-row align="center" class="list px-3 mx-auto"> -->
        <v-col md="6">
          <v-card-title>
            <v-card-text class="blue--text text-h6"  >
              Relação de Operadoras Ativas ANS
            </v-card-text>
          </v-card-title>
        </v-col>
        <v-col md="6">
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-card-title>
        </v-col>
      </v-row>
    </v-container>
  <v-container>
    <v-row align="center" >
      <v-col cols=auto class="mx-auto">
        <v-card >
          <v-data-table
            :search="search"
            :headers="headers"
            :items="operators"
            :items-per-page="5"

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
  </v-container>
  </v-card>
</template>
<script>
import OperatorDataService from "../services/OperatorDataService";
export default {
  name: "operators-list",
  data() {
    return {
      search:"",
      operators: [],
      title: "",
      headers: [
        { text: "Registro ANS", align: "start", value: "registro" },
        { text: "CNPJ", value: "cnpj", },
        { text: "Razão Social", value: "razao_social", },
        { text: "Nome Fantasia", value: "fantasia", },
        { text: "Modalidade", value: "modalidade", },
        { text: "Logradouro", value: "logradouro", },
        { text: "Numero", value: "numero", },
        { text: "Complemento", value: "complemento", },
        { text: "Bairro", value: "bairro", },
        { text: "Cidade", value: "cidade", },
        { text: "UF", value: "uf",},
        { text: "CEP", value: "cep", },
        { text: "DDD", value: "ddd", },
        { text: "Telefone", value: "telefone", },
        { text: "Fax", value: "fax", },
        { text: "Endereco eletronico", value: "email", },
        { text: "Representante", value: "representante", },
        { text: "Cargo Representante", value: "cargo", },
        { text: "Data Registro ANS", value: "data_registro", },
        { text: "Actions", value: "actions", },
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
        registro: operator.registro,
        cnpj:  operator.cnpj,
        razao_social:  operator.razao_social,
        fantasia:  operator.fantasia,
        modalidade:  operator.modalidade,
        logradouro:  operator.logradouro,
        numero:  operator.numero,
        complemento:  operator.complemento,
        bairro:  operator.bairro,
        cidade:  operator.cidade,
        uf:  operator.uf,
        cep:  operator.cep,
        ddd:  operator.ddd,
        telefone:  operator.telefone,
        fax:  operator.fax,
        email:  operator.email,
        representante:  operator.representante,
        cargo:  operator.cargo,
        data_registro: operator.data_registro,
        
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