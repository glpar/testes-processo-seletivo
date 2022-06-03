<template>
  <v-app>
    <v-app-bar app color="white">
            <v-col>
        <v-btn to="/" text color="blue">
          Home
        </v-btn>
      </v-col>
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-link to="/operators"><img src="../public/logo.webp"/></router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <v-col>
        <v-btn to="/add" text>
          Add
        </v-btn>
      </v-col>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "app",
};
</script>