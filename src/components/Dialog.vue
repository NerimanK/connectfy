 <template>
  <v-row dark color="#27282E" justify="center">
    <v-dialog
      class="background-vcard"
      v-model="bg"
      scrollable
      max-width="900px"
    >
      <v-card color="#27282E" class="background-vcard">
        <v-card-title
          style="width: 600px"
          class="ml-11 mt-5 white--text list-item-title"
        >
          <p class="card-fonts">Navigation kündigen für?</p></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text style="height: 400px">
          <v-list color="#27282E">
            <v-list-item-group style="width: 400px" v-model="model">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content class="list-item">
                  <v-list-item-title
                    color="#646577"
                    class="list-item card-fonts"
                    ><p class="text-left card-fonts">
                      {{ item.text }}
                    </p></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-inbox",
          text: "Alle",
        },
        {
          icon: "mdi-star",
          text: "Audi",
        },
        {
          icon: "mdi-send",
          text: "BMW",
        },
        {
          icon: "mdi-email-open",
          text: "Mercedes-Benz",
        },
      ],
      model: 1,
      dialog: true,
    };
  },
  computed: {
    bg: {
      get: function () {
        return this.$store.getters.flavor;
      },
      // setter
      set: function (newValue) {
      this.$store.commit('change', newValue)

      },
    },
  },
};
</script>

<style scoped>
.background-vcard {
  background: #27282e !important;
}
.font {
  color: white !important;
}

.list-item {
  background: #646577;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
}
.list-item-title {
  background: #41424d;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
}
</style>
