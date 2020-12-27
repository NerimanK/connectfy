 <template>
  <v-navigation-drawer
    v-model="drawer"
    color="#8D93AB"
    :mini-variant="miniVariant"
    :right="right"
    permanent="permanent"
    :src="bg"
    app
  >
    <v-container fill-height>
      <v-row justify="" no-gutters style="height: 100%">
        <v-col cols="12" align-self="end">
          <v-icon color="white" size="8em" class="font-bold">{{
            $store.getters.sideBarLogo
          }}</v-icon>
          <p class="card-fonts"><br />{{ $store.getters.sideBarText }}</p>
        </v-col>
        <v-col cols="12" align-self="end"> </v-col>

        <v-col justify="start" cols="12" align-self="end">
          <v-btn class="mr-12" :to="router" icon><v-icon>mdi-arrow-left</v-icon> </v-btn>
          <v-btn  class="ml-12" to="/about" icon><v-icon>mdi-home</v-icon> </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>


<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "Services", icon: "mdi-face-agent" },
        { title: "Kosten", icon: "mdi-currency-eur" },

        { title: "Einstellungen", icon: "mdi-cog" },
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
    router() {
      var currentRoute = ""
      var routes = []
      if(localStorage.getItem("LS_ROUTE_KEY"))
      {      
        routes = JSON.parse(localStorage.getItem("LS_ROUTE_KEY")) 
}
      currentRoute = routes.pop()
      window.localStorage.setItem('LS_ROUTE_KEY', JSON.stringify(routes));
      return  currentRoute;
    },
  },
};
</script>

<style>
</style>
        
        
        <style>
</style>