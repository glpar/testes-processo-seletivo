<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <img src="../public/logo.webp"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-main>
      <TableHome/>
    </v-main>
  </v-app>
</template>

<script>
import TableHome from './components/TableHome.vue';

export default {
  name: 'App',

  components: {
    TableHome
},

  data: () => ({
    //
  }),
};
</script>
