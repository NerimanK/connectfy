<template>
  <v-container fill-height>
    <v-row justify="center" no-gutters style="height: 100%">
      <v-col cols="4" align-self="end">
        <v-card class="card-fonts" color="grey" outlined tile>
          <v-card-title>Login</v-card-title>
          <v-card-actions>
            <v-container fluid>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    icon="mdi-weather"
                    placeholder="Username"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    :type="'password'"
                    icon="mdi-weather"
                    placeholder="Password"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn :to="'about'">Log in</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" align-self="end">
        <v-icon class="font-bold" color="blue lighten-1">mdi-axis-arrow</v-icon>
        <p class="font"><strong>C</strong>ONNECT<strong>F</strong>Y</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>

<style>
.card-fonts{
  color: white;
  font-weight: 300;
  font-size: 1.35em !important;
}

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
  letter-spacing: 0.14em;
}


</style>