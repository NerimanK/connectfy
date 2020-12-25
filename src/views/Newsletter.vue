<template>
  <v-container>
    <v-row no-gutters style="height: 700px">
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
          <v-img
            max-width="500px"
            v-bind:src="require('../../public/images/' + align.img)"
          ></v-img>
          <v-card-actions>
            <v-spacer> </v-spacer>
            <v-sheet @click="pushlink(align.url)"  :to="align.url" width="350px" color="rgba(0,0,0,0.65)">
              <v-btn  class="white-colr text-left" color="rgba(0,0,0,0.65)" flat block>
                              <span click="pushlink(align.url)"  class="white-colr text-left"
                >Mehr News zu {{ align.name }}</span
              >
              </v-btn>

            </v-sheet>
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
        name: "Audi",
        url:
          "https://www.manager-magazin.de/consent-a-?targetUrl=https%3A%2F%2Fwww.manager-magazin.de%2Funternehmen%2Fautoindustrie%2Fautonomes-fahren-volkswagen-testet-roboterautos-in-china-a-3cfcf20c-b9f5-4952-bbd6-cbea4e7a869f&ref=https%3A%2F%2Fwww.google.com%2F",
      },
      { align: "center", img: "bmw.png", name: "BMW", url: "https://www.handelsblatt.com/technik/thespark/autonomes-fahren-sicherheit-geht-vor-grenzfaelle-bremsen-autopiloten-aus/26128382.html?ticket=ST-2835774-NFfQOYbAGzisBeywvYCp-ap2" },
      { align: "end", img: "mercedes.png", name: "Mercedes", url: "https://www.golem.de/news/autonomes-fahren-die-neue-s-klasse-uebernimmt-im-stau-das-lenkrad-2008-150544.html" },
    ],
  }),
  methods: {
    pushlink: function (route) {
      // `this` inside methods point to the Vue instance
      window.open(route, "_blank");
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
}
</style>