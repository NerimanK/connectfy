<template>
  <v-card flat color="rgba(0,0,0,0)" class="mx-auto" max-width="800px">
    <v-toolbar color="rgba(0,0,0,0)" dark height="100px" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-avatar size="100">
          <v-img
            src="https://i.pravatar.cc/400?img=1
"
          ></v-img>
        </v-avatar>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container dark fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card dark color="rgba(0,0,0,0)" flat>
            <v-card-title v-text="card.title"></v-card-title>

            <v-card-actions>
              <v-text-field outlined :placeholder="card.src"></v-text-field>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn dark color="rgba(0,0,0,0.11)"> Abonnement Kündigen </v-btn>
      <v-spacer />
      <v-btn dark color="green"> Änderungen Speichern </v-btn>
    </v-card-actions>
  </v-card>
</template>





<script>
import SystemSettings from "./SystemSettings.vue";
export default {
  name: "SystemSettings",
  computed: {
    SystemSettings,
  },
  data: () => ({
    cards: [
      {
        title: "E-Mail",
        src: "fillout@gmail.com",
        flex: 6,
      },
      {
        title: "Telefonnummer",
        src: "+491769123023",
        flex: 6,
      },
      {
        title: "Anschrift",
        src: "Mercedesstraße 101a",
        flex: 12,
      },
      {
        title: "PLZ",
        src: "70499",
        flex: 4,
      },
      {
        title: "Stadt",
        src: "Stuttgart",
        flex: 4,
      },
      {
        title: "Land",
        src: "Deutschland",
        flex: 4,
      },
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

.smallbox {
  height: 15%;
}
.bigbox {
  height: 70%;
}
</style>
