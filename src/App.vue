<template>
  <v-app>
    <v-navigation-drawer
    v-model="drawer"
      app
      overflow
      right
    />
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title class="headline text-uppercase">
        <span>پیام رسان</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        rounded
      >
        <span class="mr-2">خروج</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    drawer:true,
    //
  }),
};
</script>
