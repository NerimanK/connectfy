<template>
  <v-container >
                <Dialog></Dialog>

    <v-toolbar flat color="rgba(0,0,0,0)" dense>
        <v-spacer></v-spacer>
        <v-btn icon color="blue" class=" mr-4"><v-icon class="font-small">mdi-hexagon-multiple-outline</v-icon> </v-btn><p class="mr-4 mt-2 font-top-right">79,99€</p>
        
    </v-toolbar>

    <v-row no-gutters style="height: 100%">
      <v-col
        class="pa-8 justify-space-around"
        :key="menu"
        v-for="menu in menus"
        cols="4"
        align-self="center"
      >
        <v-card class="ma-3 card-fonts" height="300px" color="rgba(0,0,0,0.32)">
          <v-card-title primary-title class="pt-12 justify-center align-center">
            <span class="pt-12 mt-9 justify-center font"
              >{{ menu.title }}
            </span>
          </v-card-title>

          <v-card-actions class="mt-6 mr-5 justify-end">
            <v-btn @click="$store.commit('change', true)" icon outlined color="white"><v-icon>mdi-minus</v-icon></v-btn>
          </v-card-actions>
          <v-card-text color="white" class="mr-5 text-white text-end">
            <p class="white-colr">Mercedes,Bmw</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
import Dialog from '../components/Dialog'
export default {
  name: "Home",
  computed: 
  {

  },
  components: {Dialog},
  data: () => ({
    menus: [
      { title: "Navigation", icon: "mdi-car", route: "services" },
      {
        title: "Spotify",
        icon: "mdi-book-open-page-variant-outline",
        route: "newservice",
      },
      {
        title: "Wetter",
        icon: "mdi-newspaper-variant-multiple",
        route: "newsletter",
      },
      { title: "Massage", icon: "mdi-cog-outline", route: "settings" },
    ],
  }),
};
</script>

<style>
</style>


<style scoped>
.font-bold {
  font-weight: bold;
  color: lightblue;
  font-weight: 500;
  font-size: 3em !important;
  letter-spacing: 0.167777em;
}
.font {
  color: white;
  font-weight: 380;
  font-size: 2em !important;
}
.font-top-right {
  color: white;
  font-weight: 380;
  font-size: 1.4em !important;
}
.font-small {
  color: white;
  font-size: 4em !important;
}
.white-colr {
  color: white;
}
</style>