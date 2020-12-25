<template>
  <v-container>
    <Dialog :title="title" :isAdding="isAdding" :name="name"></Dialog>

    <v-toolbar flat color="rgba(0,0,0,0)" dense>
      <v-spacer></v-spacer>
      <v-btn to="/rechnung" icon color="blue" class="mr-4"
        ><v-icon to="/about" class="font-small"
          >mdi-hexagon-multiple-outline</v-icon
        >
      </v-btn>
      <p to="/about" class="mr-4 mt-2 font-top-right">{{$store.getters.getCurrentPrice}}€</p>
    </v-toolbar>
    <v-row no-gutters style="height: 50%">
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item v-for="menu in features" :key="menu.feature">
          <v-card
            class="ma-3 card-fonts"
            height="300px"
            color="rgba(0,0,0,0.32)"
            width="300px"
          >
            <v-card-title
              primary-title
              class="pt-12 justify-center align-center"
            >
              <span class="pt-12 mt-9 justify-center font"
                >{{ menu.feature }}
              </span>
            </v-card-title>

            <v-card-actions class="mt-6 mr-5 justify-end">
              <v-btn
                @click="setDialog(false, menu.makers, menu.feature)"
                icon
                outlined
                color="white"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
            </v-card-actions>
            <v-card-text color="white" class="mr-5 text-white text-end">
              <p class="white-colr">{{text(menu.makers)}}</p>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <v-divider />
    <v-row no-gutters style="height: 50%">
      <v-slide-group v-model="model" show-arrows>
        <v-slide-item v-for="menu in nonfeatures" :key="menu.feature">
          <v-card
            class="ma-3 card-fonts"
            height="300px"
            color="rgba(0,0,0,0.32)"
            width="300px"
          >
            <v-card-title
              primary-title
              class="pt-12 justify-center align-center"
            >
              <span class="pt-12 mt-9 justify-center font"
                >{{ menu.feature }}
              </span>
            </v-card-title>

            <v-card-actions class="mt-6 mr-5 justify-end">
              <v-btn
                @click="setDialog(true,menu.makers, menu.feature)"
                icon
                outlined
                color="white"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </v-card-actions>
            <v-card-text color="white" class="mr-5 text-white text-end">
              <p class="white-colr">{{text(menu.makers)}}</p>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>





<script>
import Dialog from "../components/Dialog";
export default {
  name: "Home",

  computed: {
    features() {
      var filtered = [];
      var unfiltered = this.$store.getters.bookedServices.cards;
      
      unfiltered.forEach((element) => {
        if (element.makers.length >=3) {
          filtered.push(element);
        }
      });
      
      return filtered;
    },
        nonfeatures() {
      var filtered = [];
      var unfiltered = this.$store.getters.bookedServices.cards;
      
      unfiltered.forEach((element) => {
        if (element.makers.length < 3) {
          filtered.push(element);
        }
      });
      return filtered;
    },
  },
  
  methods: {
    text(makers) {
      var text = "";
      makers.forEach((element) => {
        text += element + ", ";
      });

      return text.substring(0, text.length - 2);
    },
    setDialog(isAdding,makers, title)
    {
      this.isAdding = isAdding
      this.name = makers
      this.title = title
      console.log(title)
            

      this.$store.commit('change', true)
    }
  },
  components: { Dialog },
  data: () => ({
    menus: [
      { title: "Navigation", icon: "mdi-car", route: "services" },
      { title: "Navigation", icon: "mdi-car", route: "services" },
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
    ],
    menus2: [
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
    ],
    model: 1,
    dialog : false,
    isAdding: false,
    name: "",
    title : ""
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
  font-size: 1.5em !important;
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