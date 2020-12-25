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
          <p class="card-fonts">
            Navigation {{ text(isAdding) }} für?
          </p></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text style="height: 400px">
          <v-list color="#27282E">
            <v-list-item-group style="width: 400px" v-model="model">
              <v-list-item
                @click="itemClicked(item, title, isAdding)"
                v-for="(item, i) in generateList(name)"
                :key="i"
              >
                <v-list-item-content class="list-item">
                  <v-list-item-title
                    color="#646577"
                    class="list-item card-fonts"
                    ><p class="text-left card-fonts">
                      {{ item }}
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

  props: {
    isAdding: Boolean,
    name: Array,
    title: String,
  },
  methods: {
    text(isAdding) {
      if (isAdding) return "hinzufügen";
      if (!isAdding) return "entfernen";
    },
    generateList(name) {
      var superReferenceList = ["Audi", "BMW", "Mercedes"];
      var referenceList = ["Audi", "BMW", "Mercedes"];
      referenceList = referenceList.filter(function (val) {
        return name.indexOf(val) == -1;
      });
      console.log(referenceList);
      if (referenceList.length == 0) {
        referenceList = superReferenceList;
      }
      return referenceList;
    },
    itemClicked(itemName, title, isAdding) {
      var buffer = [];
      var rawValue = this.$store.getters.bookedServices;
      if (isAdding) {
        rawValue.cards.forEach(function (value, i) {
          if (value.feature == title) {
            console.log(value.makers);
            console.log(i);
            buffer = rawValue.cards[i].makers;
            buffer.push(itemName)
            rawValue.cards[i].makers = buffer;
          }
        });
        this.$store.commit("updateList", rawValue);
        this.$store.commit("change", false);
      } else {
        console.log(rawValue);

        rawValue.cards.forEach(function (value, i) {
          if (value.feature == title) {
            console.log(value.makers);
            console.log(i);
            buffer = rawValue.cards[i].makers;
            buffer.pop(itemName);
            rawValue.cards[i].makers = buffer;
          }
        });
        this.$store.commit("updateList", rawValue);
        this.$store.commit("change", false);
      }
    },
  },
  computed: {
    bg: {
      get: function () {
        return this.$store.getters.flavor;
      },
      // setter
      set: function (newValue) {
        this.$store.commit("change", newValue);
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
