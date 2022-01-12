<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app overflow right>
      <v-list>
        <v-list-item to="/">
          <v-list-item-content>
            داشبرد
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/exam">
          <v-list-item-content>
            آزمون ها
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/question">
          <v-list-item-content>
            سوالات
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/student">
          <v-list-item-content>
            دانش آموزان
          </v-list-item-content>
        </v-list-item>
      </v-list>
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