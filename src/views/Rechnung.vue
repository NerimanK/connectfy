<template>
  <v-card flat color="rgba(0,0,0,0)" class="mx-auto" max-width="800px">
    <v-toolbar color="rgba(0,0,0,0)" dark height="100px" flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-avatar size="80">
          <v-img src="icons8-loading-100.png"></v-img>
        </v-avatar>
        {{$store.getters.getCurrentPrice}}€
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container class="bigbox" style="overflow: auto" color="black" dark fluid>
      <v-row color="black" dense>
        <v-col  v-for="card in features" :key="card.title" cols="12">
          <v-card v-if="card.makers.length>0" dark color="rgba(0,0,0,0.1)" flat>
            <v-card-title v-text="card.feature"></v-card-title>

            <v-card-actions>
              <v-container fluid>
                <v-row dense :key="make" v-for="make in card.makers">
                  <v-col class="text-left" cols="3">{{ make }}</v-col>
                  <v-col cols="9">{{ card.price }}€ /mtl.</v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row dense>
                  <v-col class="text-left" cols="3">Summe</v-col>
                  <v-col cols="9">{{(card.makers.length * card.price).toFixed(2)}}€ /mtl.</v-col>
                  <v-col v-if="card.makers.length > 1" class="text-left" cols="3"
                    >Kombirabatte</v-col
                  >
                  <v-col v-if="card.makers.length > 1" cols="3">
                    <span class="rabatt">(-{{ (card.makers.length-1)*0.1  * 100 }}%) </span>
                  </v-col>
                  <v-col v-if="card.makers.length > 1" class="text-left" cols="6">
                    <span class="ml-12">-{{((card.makers.length-1)*0.1 * card.makers.length * card.price).toFixed(2)}}€ /mtl.</span>
                  </v-col>
                  <v-col v-if="card.makers.length > 1" class="text-left" cols="3"
                    >Total
                  </v-col>
                  <v-col v-if="card.makers.length > 1" class="text-center" cols="9"
                    ><span>{{(card.makers.length * card.price -card.makers.length * card.price * (card.makers.length-1)*0.1).toFixed(2)}}€ /mtl.</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="mt-6"> </v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <p class="card-fonts">Aktuelle monatliche Kosten: {{$store.getters.getCurrentPrice}}€</p>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>





<script>
export default {
  name: "Rechnung",
  computed: {
    features() {
      return this.$store.getters.bookedServices.cards;
    }},
  data: () => ({
    cards: [
      {
        feature: "Spotify",
        makers: ["Audi", "BMW", "Mercedes"],
        price: 9.99,
      },
      {
        feature: "Kalender",
        makers: ["Audi", "BMW", "Mercedes"],
        price: 19.99,
      },
      {
        feature: "Wetter",
        makers: ["Audi"],
        price: 9.99,
      },
      {
        feature: "Autonomes Fahren",
        makers: ["Audi", "BMW"],
        price: 109.99,
      },
    ],
  }),
  created: function () {
    this.$store.commit("setSideBarLogo", "mdi-cash-usd-outline");

    this.$store.commit("setSideBarText", "Deine Rechnung");
    // `event` is the native DOM event
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
}

.smallbox {
  height: 15%;
}
.bigbox {
  height: 600px;
}
.rabatt {
  color: red;
  font-size: 0.75em !important;
}
</style>

