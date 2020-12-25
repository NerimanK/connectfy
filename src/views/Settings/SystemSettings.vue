<template>
  <v-container>
    <v-row no-gutters style="height: 100%">
      <v-col
        :key="menu.title"
        v-for="menu in menus"
        cols="12"
        align-self="center"
      >
        <v-card class="ma-3 card-fonts" height="100px" color="rgba(0,0,0,0.32)">
          <v-container grid-list-xl >
            <v-layout
              row
              
              align-center
              style="height: 100px"
            >
              <v-flex class="text-left card-fonts" xs8>
{{menu.title}}
              </v-flex>

              <v-flex xs1>
              </v-flex>

              <v-flex xs3>
                <v-switch  v-model="menu.switch"></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
export default {
  name: "SystemSettings",
  computed: {},
  data: () => ({
    menus: [
      { title: "Mitteilungston", switch: true },
      { title: "Stromsparmodus", switch: false  },
      { title: "Push Benachrichtigungen", switch: true  },
      { title: "Ortungsdienste", switch: true  },
      { title: "Sprachsteuerung", switch: true  },
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