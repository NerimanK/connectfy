<template>
  <div id="app"  :class="currentRouteName == 'Home' ? 'back-image' : 'back'"  >
    <v-app id="inspire">
      <v-content>
        <SideBar v-if="renderSideBar"></SideBar>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>




<script>
import SideBar from './components/SideBar'


export default {
  components: {SideBar },
  computed: {
    currentRouteName() {
      console.log(this.$route.name)
      return this.$route.name;
    },
    renderSideBar() {
      var route = this.$route.name
      if(route=="Home" | route == "About") return false
      return true;
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#inspire {
  background: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.back-image {
  background-image: url(https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3035&q=80);
  background-size: cover;
  opacity: 0.8;
}
.back {
  background: rgb(27, 28, 33);
  background: linear-gradient(
    180deg,
    rgba(27, 28, 33, 1) 0%,
    rgba(116, 123, 149, 1) 72%,
    rgba(27, 28, 33, 1) 100%
  );
}
#inspire {
  background: none;
}
</style>
