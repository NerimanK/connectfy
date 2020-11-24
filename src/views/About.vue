<template>
  <v-container fill-height fluid>
    
    <v-row justify="space-around" no-gutters style="height: 100%">
      <v-col
        class="justify-space-around"
        :key="menu"
        v-for="menu in menus"
        cols="3"
        align-self="end"
      >
        <v-card :to="menu.route" class="ma-3 card-fonts" height="300px" color="#8D93AB">
          <v-card-actions>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-icon class="card-fonts" color="white">{{menu.icon}}</v-icon>
                </v-col>
                <v-col class="mt-9" cols="12">
                  <span class="card-fonts"> {{ menu.title }} </span>
                </v-col>
              </v-row>
              <v-spacer />
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" align-self="end">
        <v-icon class="font-bold">mdi-axis-arrow</v-icon>
        <p class="font"><strong>C</strong>ONNECT<strong>F</strong>Y</p>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    menus: [
      { title: "Deine Services", icon: "mdi-car", route: "services" },
      { title: "Neue Services", icon:  "mdi-book-open-page-variant-outline", route: "newservice" },
      { title: "Newsletter", icon: "mdi-newspaper-variant-multiple", route:"newsletter" },
      { title: "Einstellungen", icon:  "mdi-cog-outline", route: "settings" },
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
  font-weight: 300;
  font-size: 4em !important;
  letter-spacing: 0.16777em;
}
</style>