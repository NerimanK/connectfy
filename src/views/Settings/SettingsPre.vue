<template>
  <v-container>
    <v-row no-gutters style="height: 400px">
      <v-col
        class="ml-12"
        cols="12"
        v-for="align in alignments"
        :key="align"
        :align-self="align.align"
      >
        <v-card
          color="rgba(0,0,0,0)"
          max-width="500px"
          class="pa-2 ml-12"
          outlined
          tile
        >

          <v-card-actions class="justify-center">
            <v-spacer> </v-spacer>
            <v-card class="pt-12" height="200px" @click="pushlink(align.url)"  :to="align.url" width="350px" color="rgba(0,0,0,0.44)">
                              <span height="200px" click="pushlink(align.url)"  class="mt-12 card-fonts text-center"
                >Weiter zu {{ align.name }}</span>
            </v-card>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
export default {
  name: "Home",
  computed: {},
  data: () => ({
    alignments: [
      {
        align: "start",
        img: "audi.png",
        name: "Persönlichen Daten",
        url:
          "/personalsettings",
      },
      { align: "center", img: "bmw.png", name: "Systemeinstellungen", url: "/systemsettings" },
    ],
  }),
  methods: {
    pushlink: function (route) {
      // `this` inside methods point to the Vue instance
      this.$router.push(route);
    },
  },
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
  font-weight: 380;
  font-size: 0.9em !important;
  height: 200px;
}
</style>