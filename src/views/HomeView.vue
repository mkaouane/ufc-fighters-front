<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>
     <form @submit.prevent="onSubmit"
>
    <v-text-field
      v-model="fighter.firstName"
      :counter="10"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="fighter.lastName"
      :counter="10"
      label="Last Name"
      required

    ></v-text-field>
        <v-text-field
      v-model="fighter.height"
      :counter="10"
      label="Last Name"
      required

    ></v-text-field>
        <v-text-field
      v-model="fighter.division"
      :counter="10"
      label="Last Name"
      required

    ></v-text-field>
        <v-text-field
      v-model="fighter.image"
      :counter="10"
      label="Last Name"
      required

    ></v-text-field>


    <v-btn
      class="mr-4"
      @click.prevent="onSubmit"
    >
      submit
    </v-btn>
  </form>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="fighter in $store.state.fighters" :key="fighter.id" cols="4">
            <v-card height="200">{{fighter.firstName}}</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomeView",

  components: {},
  data() {
    return {
      drawer: null,
      fighter : {
        firstName : "",
        lastName : "",
        height:"",
        division:"",
        image:""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("postFighter", this.fighter).then(() => {
        this.$router.push("/");
        this.fighter.firstName = "";
        this.fighter.lastName = "";
        this.fighter.height = "";
        this.fighter.division = "";
        this.fighter.image = "";
      });
    },
  },
  mounted() {
    this.$store.dispatch('fetchFighters')
  }
};
</script>
