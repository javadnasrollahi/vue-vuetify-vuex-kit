<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app overflow right>
      
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span>سایت نمونه</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded>
        <span>خروج</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      drawer: null,
      //
    }),
  };
</script>