<template>
 <v-navigation-drawer
        fixed
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>John </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>





<script>
export default {
  name: "AppBar",
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