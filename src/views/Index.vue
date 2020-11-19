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
      <v-col cols="12" xs="12">
        <StatusCard type="victory"/>
        <Avatar imageUrl="character1.png" type="rounded" :size="54" borderColor="blue" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import StatusCard from "@/components/base/StatusCard";
import MatchDetail from "@/components/MatchDetail";
import Avatar from "@/components/base/Avatar";

export default {
  name: "Index",
  data() {
    return {
    };
  },

  components: {
    StatusCard,
    MatchDetail,
    Avatar
  },

  computed: {},

  methods: {
    ...mapActions("app", {
    }),

  },

  async mounted() {
  }
};
</script>

<style scoped lang="sass">
.page-content
  padding-top: 150px
</style>