<template>
  <v-container fluid tag="section" class="page-content">
    <v-row>
      <v-col cols="12" xs="12" class="pt-0 pl-4 pb-2">
        <img src="@/assets/images/bar-chart-2.png" /> <span class="font-size1 font-color1 font-weight-bold">Your Latest Match Analysis</span>
      </v-col>
      <v-col cols="12" xs="12" class="pa-0">
        <MatchDetail />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" class="pt-0">
        <MatchHistory />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MatchDetail from "@/components/MatchDetail";
import MatchHistory from "@/components/MatchHistory";

export default {
  name: "Index",
  data() {
    return {
    };
  },

  components: {
    MatchDetail,
    MatchHistory,
  },

  methods: {
    ...mapActions("app", ['getMatchHistory']),
  },

  async mounted() {
    this.getMatchHistory();
  }
};
</script>

<style scoped lang="sass">
.page-content
  padding-top: 150px
</style>